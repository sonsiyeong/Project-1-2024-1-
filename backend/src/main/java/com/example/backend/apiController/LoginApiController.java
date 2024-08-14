package com.example.backend.apiController;

import com.example.backend.dto.LoginDto;
import com.example.backend.dto.SignupDto;
import com.example.backend.entity.User;
import com.example.backend.jwt.JwtUtil;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
public class LoginApiController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("api/login")
    public ResponseEntity<Map<String, String>> loginUser(@RequestBody LoginDto loginDto){
        try{
            Optional<User> userOptional = userRepository.findByUserId(loginDto.getUserId());
            if(userOptional.isPresent()){
                // 사용자가 존재하는 경우
                User user = userOptional.get();
                if (bCryptPasswordEncoder.matches(loginDto.getPassword(), user.getPassword())){
                    // 입력된 비밀번호와 데이터베이스에 저장된 비밀번호가 일치할 경우
                    String token = jwtUtil.generateToken(user.getUserId(), user.getUserRole());

                    Map<String, String> response = new HashMap<>();
                    response.put("token", token);
                    response.put("role", user.getUserRole());

                    return ResponseEntity.ok(response);
                }else{
                    // 비밀번호가 일치하지 않을 경우
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "Invalid credentials"));
                }
            }else{
                // 사용자가 존재하지 않을 경우
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "User not found"));
            }
        }catch(Exception e){
            // 예외 처리
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("error", "Server error"));
        }
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleException(Exception e) {
        System.out.println("Exception handled: " + e.getMessage());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("서버 오류가 발생했습니다.");
    }
}
