package com.example.backend.service;

import com.example.backend.dto.MyPageDto;
import com.example.backend.dto.UserDto;
import com.example.backend.entity.Scrap;
import com.example.backend.entity.User;
import com.example.backend.repository.ScrapRepository;
import com.example.backend.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    private UserRepository userRepository;
    private ScrapRepository scrapRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    public MyPageDto userByUserCode(Long userCode) {
        MyPageDto users = userRepository.UserByUserCode(userCode);
        return MyPageDto.createMyPageDto(users);
    }

    public List<Scrap> getScraps(){
        return scrapRepository.findAll();
    }

}
