package com.example.backend.apiController;

import com.example.backend.dto.MyPageDto;
import com.example.backend.dto.ProductDetailDto;
import com.example.backend.dto.ResponseDto;
import com.example.backend.dto.UserDto;
import com.example.backend.service.ReviewService;
import com.example.backend.service.ScrapService;
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
    @Autowired
    private ScrapService scrapService;

    // 마이페이지
    @PreAuthorize("hasRole('USER')")
    @GetMapping("/api/users/{userCode}")
    public ResponseEntity<ResponseDto<?>> getUserByUserCode(@PathVariable Long userCode) {
        try{
            MyPageDto dtos=userService.userByUserCode(userCode);
            dtos.setScrapDtoList(scrapService.scrapsByUserCode(userCode));
            return ResponseEntity.ok(new ResponseDto<>("사용자를 성공적으로 조회하였습니다.", dtos));
        }catch (Exception e) {
            ResponseDto<String> responseDto = new ResponseDto<>(e.getMessage(), null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseDto);
        }
    }
}
