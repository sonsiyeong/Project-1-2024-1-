package com.example.backend.dto;

import lombok.Data;

@Data
public class SignupDto {
    private Long userCode;
    private String userId;
    private String password;
    private String passwordConfirm;
    private String userName;
    private String email;
}