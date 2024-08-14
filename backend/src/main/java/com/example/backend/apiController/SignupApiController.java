package com.example.backend.apiController;

import com.example.backend.dto.SignupDto;
import com.example.backend.entity.User;
import com.example.backend.jwt.JwtUtil;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.SignupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SignupApiController {

    @Autowired
    private SignupService signupService;

    @Autowired
    private PasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("api/register")
    public ResponseEntity<String> registerUser(@RequestBody SignupDto signupDto){

        try{
            // 사용자 ID 중복 검사
            if(signupService.isUserIdExists(signupDto.getUserId())){
                return ResponseEntity.status(HttpStatus.CONFLICT).body("이미 존재하는 아이디입니다.");
            }

            // 사용자 ID 유효성 검사 -> 한글 입력 여부
            if (!signupService.isUserIdValid(signupDto.getUserId())){
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("사용할 수 없는 아이디입니다.");
            }

            // 이메일 유효성 검사 -> 올바른 이메일 형식인지 확인
            if(!signupService.isEmailValid(signupDto.getEmail())){
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("유효한 이메일 주소가 아닙니다.");
            }

            // 비밀번호 유효성 검사 -> 비밀번호 길이 제한
            if(!signupService.isPasswordValid(signupDto.getPassword())){
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("비밀번호가 너무 깁니다.");
            }

            // 비밀번호와 비밀번호 확인이 일치하는지 확인
            if(!signupDto.getPassword().equals(signupDto.getPasswordConfirm())){
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("비밀번호가 일치하지 않습니다.");
            }

            // 유효성 검사를 통과하면 사용자 등록을 시도
            User registeredUser = signupService.registerUser(signupDto);

            // 사용자 등록이 성공한 경우
            if(registeredUser != null){
                return ResponseEntity.ok("정상적으로 회원가입 되었습니다.");
            } else {
                // 사용자 등록이 실패한 경우
                return ResponseEntity.status(HttpStatus.CONFLICT).body("만료된 키입니다.");
            }
        } catch(Exception e){
            // 예외가 발생한 경우
            System.out.println("Error occurred during user registration: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("서버 오류가 발생했습니다.");
        }
    }
}
