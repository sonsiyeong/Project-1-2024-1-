package com.example.backend.apiController;

import com.example.backend.dto.SignupDto;
import com.example.backend.entity.User;
import com.example.backend.service.SignupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class SignupApiController {

    @Autowired
    private SignupService signupService;

    @Autowired
    private PasswordEncoder bCryptPasswordEncoder;

    @PostMapping("api/register")
    public ResponseEntity<Map<String, Object>> registerUser(@RequestBody SignupDto signupDto) {
        Map<String, Object> response = new HashMap<>();

        try {
            // 사용자 ID 중복 검사
            if(signupService.isUserIdExists(signupDto.getUserId())){
                response.put("code", "error");
                response.put("message", "이미 존재하는 아이디입니다.");
                return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
            }

            // 사용자 ID 유효성 검사
            if (!signupService.isUserIdValid(signupDto.getUserId())){
                response.put("code", "error");
                response.put("message", "사용할 수 없는 아이디입니다.");
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
            }

            // 이메일 유효성 검사
            if(!signupService.isEmailValid(signupDto.getEmail())){
                response.put("code", "error");
                response.put("message", "유효한 이메일 주소가 아닙니다.");
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
            }

            // 비밀번호 유효성 검사
            if(!signupService.isPasswordValid(signupDto.getPassword())){
                response.put("code", "error");
                response.put("message", "비밀번호가 너무 깁니다.");
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
            }

            // 비밀번호와 비밀번호 확인이 일치하는지 확인
            if(!signupDto.getPassword().equals(signupDto.getPasswordConfirm())){
                response.put("code", "error");
                response.put("message", "비밀번호가 일치하지 않습니다.");
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
            }

            // 유효성 검사를 통과하면 사용자 등록을 시도
            User registeredUser = signupService.registerUser(signupDto);

            // 사용자 등록이 성공한 경우
            if(registeredUser != null){
                response.put("code", "success");
                response.put("message", "정상적으로 회원가입 되었습니다.");
                return ResponseEntity.ok(response);
            } else {
                // 사용자 등록이 실패한 경우
                response.put("code", "error");
                response.put("message", "만료된 키입니다.");
                return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
            }
        } catch(Exception e){
            // 예외가 발생한 경우
            System.out.println("Error occurred during user registration: " + e.getMessage());
            response.put("code", "error");
            response.put("message", "서버 오류가 발생했습니다.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}
