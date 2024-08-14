package com.example.backend.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import java.util.Date;

@Component
public class JwtUtil { // JWT 사용하여 사용자 인증을 처리하는데 모든 기능 제공
    @Value("${jwt.secret}")
    private String secret;

    private Key SECRET_KEY;

    @PostConstruct  
    public void init(){ // JWT 서명에 사용할 수 있는 Key 객체로 변환
        this.SECRET_KEY= Keys.hmacShaKeyFor(Base64.getDecoder().decode(secret));
    }

    private static final long EXPIRATION_TYPE=86400000; // 24시간

    // 사용자 ID와 역할을 기반으로 JWT 생성
    public String generateToken(String userId, String UserRole){
        Map<String, Object> claims= new HashMap<>();
        claims.put("role", UserRole);

        return Jwts.builder()
                .setSubject(userId)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis()+ EXPIRATION_TYPE))
                .signWith(SECRET_KEY)
                .compact();
    }

    // 사용자 ID 추출 메서드
    public String extractUserId(String token){
        Claims claims = Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject();
    }

    // 사용자 역할 추출 메서드
    public String extractRole(String token){
        Claims claims = Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody();
        return (String) claims.get("role");
    }

    // JWT 유효성 검증 메서드
    // JWT에서 추출한 사용자 ID가 주어진 userId와 일치한지 & JWT가 만료되지 않았는지
    public boolean validateToken(String token, String userId){
        String extractedUserId = extractUserId(token);
        return (extractedUserId.equals(userId) && !isTokenExpired(token));
    }

    // JWT 만료 확인 메서드
    public boolean isTokenExpired(String token){
        Claims claims = Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody();
        return claims.getExpiration().before(new Date());
    }
}
