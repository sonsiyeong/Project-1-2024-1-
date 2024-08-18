package com.example.backend.apiController;

import com.example.backend.dto.ReviewDto;
import com.example.backend.dto.ResponseDto;
import com.example.backend.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReviewApiController {
    @Autowired
    private ReviewService reviewService;

    // 상품에 대한 모든 리뷰
    @GetMapping("/api/products/{productCode}/reviews")
    public ResponseEntity<ResponseDto<?>> reviews(@PathVariable Long productCode) {
        try{
            // 서비스에 위임
            List<ReviewDto> dtos = reviewService.reviewsByProductCode(productCode);
            // 결과 응답
            return ResponseEntity.ok(new ResponseDto<>("리뷰를 성공적으로 조회하였습니다.", dtos));
        } catch (Exception e) {
            ResponseDto<String> responseDto = new ResponseDto<>(e.getMessage(), null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseDto);
        }
    }

    // 리뷰 생성
    @PreAuthorize("hasRole('USER')")
    @PostMapping("/api/products/{productCode}/reviews")
    public ResponseEntity<ResponseDto<?>> create(@PathVariable Long productCode, @RequestBody ReviewDto dto) {
        try {
            // 서비스에 위임
            ReviewDto createdDto = reviewService.create(productCode, dto);
            ReviewDto responseDto = reviewService.reviewByReviewCode(createdDto.getReviewCode());
            // 결과 응답
            return ResponseEntity.ok(new ResponseDto<>("리뷰를 성공적으로 생성하였습니다.", responseDto));
        } catch (Exception e) {
            ResponseDto<String> responseDto = new ResponseDto<>(e.getMessage(), null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseDto);
        }
    }

    // 리뷰 수정
    @PreAuthorize("hasRole('USER')")
    @PatchMapping("/api/reviews/{reviewCode}")
    public ResponseEntity<ResponseDto<?>> update(@PathVariable Long reviewCode, @RequestBody ReviewDto dto) {
        try {
            // 서비스에 위임
            ReviewDto updatedDto = reviewService.update(reviewCode, dto);
            // 결과 응답
            return ResponseEntity.ok(new ResponseDto<>("리뷰를 성공적으로 수정하였습니다.", updatedDto));
        } catch (Exception e) {
            ResponseDto<String> responseDto = new ResponseDto<>(e.getMessage(), null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseDto);
        }
    }

    // 리뷰 삭제
    @PreAuthorize("hasRole('USER')")
    @DeleteMapping("/api/reviews/{reviewCode}")
    public ResponseEntity<ResponseDto<?>> delete(@PathVariable Long reviewCode) {
        try {
            // 서비스에 위임
            ReviewDto deletedDto = reviewService.delete(reviewCode);
            // 결과 응답
            return ResponseEntity.ok(new ResponseDto<>("리뷰를 성공적으로 삭제하였습니다.", deletedDto));
        } catch (Exception e) {
            ResponseDto<String> responseDto = new ResponseDto<>(e.getMessage(), null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseDto);
        }
    }
}