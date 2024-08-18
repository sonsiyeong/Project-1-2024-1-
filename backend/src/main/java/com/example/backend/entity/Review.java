package com.example.backend.entity;

import com.example.backend.dto.ReviewDto;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;

@Table(name = "REVIEWS")
@Entity // 해당 클래스가 엔티티임을 선언, 클래스 필드를 바탕으로 DB에 테이블 생성
@Getter // 각 필드 값을 조회할 수 있는 getter 메서드 자동 생성
@ToString // 모든 필드를 출력할 수 있는 toString 메서드 자동 생성
@AllArgsConstructor // 모든 필드를 매개변수로 갖는 생성자 자동 생성
@NoArgsConstructor // 매개변수가 아예 없는 기본 생성자 자동 생성

public class Review {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY) // DB에 등록될 때 자동으로 1씩 증가
    @Column(name="review_code")
    private Long reviewCode;

    @Column(name="review_content")
    private String reviewContent;

    @Column(name="review_write_date_time", insertable = false, updatable = false) // 현재 시각이 자동으로 기록되도록 함
    private LocalDate reviewWriteDateTime;

    @Column(name="review_star_rating")
    private int reviewStarRating;

    @ManyToOne
    @JoinColumn(name = "product_code")
    @JsonManagedReference
    private Product product;

    @ManyToOne
    @JoinColumn(name="user_code")
    private User user;

    public static Review createReview(ReviewDto reviewDto, Product product, User user) {
        // 예외 발생
        if (reviewDto.getReviewCode() != null)
            throw new IllegalArgumentException("리뷰 생성 실패! 리뷰 code는 중복될 수 없습니다.");
        if (reviewDto.getProductCode() != product.getProductCode())
            throw new IllegalArgumentException("리뷰 생성 실패! 상품 code가 잘못됐습니다.");
        if(reviewDto.getUserCode() != user.getUserCode())
            throw  new IllegalArgumentException("리뷰 생성 실패! 사용자 code가 잘못됐습니다.");

        // 엔티티 생성 및 반환
        return new Review(
                reviewDto.getReviewCode(),
                reviewDto.getReviewContent(),
                reviewDto.getReviewWriteDateTime(),
                reviewDto.getReviewStarRating(),
                product,
                user
        );
    }

    public void patch(ReviewDto reviewDto) {
        // 예외 발생
        if (this.reviewCode != reviewDto.getReviewCode())
            throw new IllegalArgumentException("리뷰 수정 실패! 잘못된 리뷰 code가 입력됐습니다.");
        // 객체 갱신
        if (reviewDto.getReviewContent() != null) { // 수정할 본문 데이터가 있다면
            this.reviewContent = reviewDto.getReviewContent(); // 내용 반영
            this.reviewWriteDateTime = reviewDto.getReviewWriteDateTime(); // 수정된 시각 반영
        }
    }
}
