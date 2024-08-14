package com.example.backend.service;

import com.example.backend.dto.SignupDto;
import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import java.util.regex.Pattern;

@Service
public class SignupService {// 회원가입

    @Autowired
    private UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    // 아이디 유효성 검사 : 공백이 아니며 영문자와 숫자로만 이루어졌는지 확인
    public boolean isUserIdValid(String userId){
        return StringUtils.hasText(userId) && Pattern.matches("^[a-zA-Z0-9]*$", userId);
    }

    // 이메일 유효성 검사 : 공백이 아니며 이메일 형식이 맞는지 확인
    public boolean isEmailValid(String email){
        return StringUtils.hasText(email) && Pattern.matches("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$", email);
    }

    // 비밀번호 길이 검사 : 공백이 아니며 8자 이상 20자 이하인지 확인
    public boolean isPasswordValid(String password){
        return password != null && password.length() >= 8 && password.length()<=20;
    }

    // 아이디 중복 확인 : 데이터베이스에 입력된 userId가 이미 존재하는지 확인
    public boolean isUserIdExists(String userId){
        boolean exists = userRepository.existsByUserId(userId);
        return exists;
    }

    // 사용자 등록
    public User registerUser(SignupDto signupDto){
        // 비밀번호와 비밀번호 확인이 일치하는지 확인
        if(!signupDto.getPassword().equals(signupDto.getPasswordConfirm())){
            throw new IllegalArgumentException("Passwords do not match.");
        }
        User newUser = new User();
        newUser.setUserId(signupDto.getUserId());
        newUser.setPassword(bCryptPasswordEncoder.encode(signupDto.getPassword()));
        newUser.setUserName(signupDto.getUserName());
        newUser.setEmail(signupDto.getEmail());
        newUser.setUserRole("USER"); // 기본적으로 USER 권한 부여
        User savedUser = userRepository.save(newUser);
        return savedUser;
    }
}
