package com.example.backend.dto;

import com.example.backend.entity.Review;
import lombok.*;

import java.time.LocalDateTime;

@AllArgsConstructor // 모든 필드를 매개변수로 갖는 생성자 자동 생성
@NoArgsConstructor // 매개변수가 아예 없는 기본 생성자 자동 생성
@Getter // 각 필드 값을 조회할 수 있는 getter 메서드 자동 생성
@Setter // 각 필드 값을 설정할 수 있는 setter 메서드 자동 생성
@ToString // 모든 필드를 출력할 수 있는 toString 메서드 자동 생성

public class ReviewDto {

    private Long reviewCode;
    private String reviewContent;
    private LocalDateTime reviewWriteDateTime;
    private int reviewStarRating;
    private Long productCode;
    private Long userCode;

    public static ReviewDto createReviewDto(Review review){
        return new ReviewDto(
                review.getReviewCode(), // 리뷰 엔티티의 code
                review.getReviewContent(), // 리뷰 엔티티의 content
                review.getReviewWriteDateTime(), // 리뷰 엔티티의 writeDateTime
                review.getReviewStarRating(), //리뷰 엔티티의 starRating
                review.getProduct().getProductCode(), // 리뷰 엔티티가 속한 상품의 code
                review.getUser().getUserCode() // 리뷰를 작성한 사용자의 code
        );
    }
}