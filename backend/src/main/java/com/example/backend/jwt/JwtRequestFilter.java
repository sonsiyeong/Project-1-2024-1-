package com.example.backend.jwt;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class JwtRequestFilter implements Filter {
    @Autowired
    private JwtUtil jwtUtil; // JWT와 관련된 작업을 수행하는 유틸리티 클래스

    @Autowired
    @Lazy // 지연 로딩
    private UserDetailsService userDetailsService; // JWT에 포함된 사용자 이름을 기반으로 사용자의 상세 정보를 로드하는 서비스

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
        throws IOException, ServletException{
            HttpServletRequest httpRequest = (HttpServletRequest) request;
            HttpServletResponse httpResponse = (HttpServletResponse) response;

            String authorizationHeader = httpRequest.getHeader("Authorization");

            String username = null;
            String jwt = null;
            
            // JWT 추출
            if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")){
                jwt = authorizationHeader.substring(7);
                username = jwtUtil.extractUserId(jwt); // 추출한 JWT에서 사용자 ID를 추출
            }

            if (username != null && SecurityContextHolder.getContext().getAuthentication() == null){
                UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);

                // JWT 유효성 검사
                if (jwtUtil.validateToken(jwt, userDetails.getUsername())){
                    UsernamePasswordAuthenticationToken authenticationToken =
                            new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                    authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(httpRequest));
                    SecurityContextHolder.getContext().setAuthentication(authenticationToken);
                }else{ // JWT가 유효하지 않은 경우
                    httpResponse.sendError(HttpServletResponse.SC_UNAUTHORIZED, "JWT Token is not valid.");
                    return;
                }
            }
            chain.doFilter(request,response);
    }
}
