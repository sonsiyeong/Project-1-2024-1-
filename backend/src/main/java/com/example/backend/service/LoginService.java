package com.example.backend.service;

import com.example.backend.dto.LoginDto;
import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService {// 로그인

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public LoginService(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder){
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    public Optional<User> loginUser(LoginDto loginDto){
        Optional<User> userOptional=userRepository.findByUserId(loginDto.getUserId());
        if(userOptional.isPresent()){
            // 사용자가 존재할 경우
            User user = userOptional.get();
            if(bCryptPasswordEncoder.matches(loginDto.getPassword(), user.getPassword())){
                return Optional.of(user);
            }
        }
        return Optional.empty();
    }
}
