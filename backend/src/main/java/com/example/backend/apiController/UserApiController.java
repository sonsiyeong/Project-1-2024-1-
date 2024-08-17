package com.example.backend.apiController;

import com.example.backend.dto.UserDto;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserApiController {

    @Autowired
    private UserService userService;

    // 마이페이지
    @PreAuthorize("hasRole('USER')")
    @GetMapping("/api/users/{userCode}")
    public ResponseEntity<List<UserDto>> getUserByUserCode(@PathVariable Long userCode) {
        List<UserDto> dtos = userService.userByUserCode(userCode);
        return ResponseEntity.status(HttpStatus.OK).body(dtos);
    }
}
