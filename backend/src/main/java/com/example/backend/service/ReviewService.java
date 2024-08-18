package com.example.backend.service;

import com.example.backend.dto.ReviewDto;
import com.example.backend.entity.Review;
import com.example.backend.entity.Product;
import com.example.backend.entity.User;
import com.example.backend.repository.ReviewRepository;
import com.example.backend.repository.ProductRepository;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReviewService {

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private UserRepository userRepository;

    // 상품 코드에 대한 리뷰 리스트
    public List<ReviewDto> reviewsByProductCode(Long productCode){
        List<Review> reviews = reviewRepository.ReviewsByProductCode(productCode);
        return reviews.stream()
                .map(ReviewDto::createReviewDto)
                .collect(Collectors.toList());
    }

    // 사용자 코드에 대한 리뷰 리스트
    public List<ReviewDto> reviewsByUserCode(Long userCode){
        List<Review> reviews = reviewRepository.ReviewsByUserCode(userCode);
        return reviews.stream()
                .map(ReviewDto::createReviewDto)
                .collect(Collectors.toList());
    }

    public ReviewDto reviewByReviewCode(Long reviewCode){
        Review review=reviewRepository.ReviewByReviewCode(reviewCode);
        return ReviewDto.createReviewDto(review);
    }

    // 리뷰 생성
    @Transactional
    public ReviewDto create(Long productCode, ReviewDto reviewDto) {
        // 1. 상품 조회 및 예외 발생
        Product product=productRepository.findById(productCode)
                .orElseThrow(() -> new IllegalArgumentException("리뷰 생성 실패! 대상 상품이 없습니다."));
        // 2. 사용자 조회 및 예외 발생
        User user=userRepository.findById(reviewDto.getUserCode())
                .orElseThrow(() -> new IllegalArgumentException("리뷰 생성 실패! 사용자가 존재하지 않습니다."));
        // 3. 리뷰 엔티티 생성
        Review review = Review.createReview(reviewDto, product, user);
        // 4. 리뷰 엔티티를 DB에 저장
        Review created = reviewRepository.save(review);
        // 5. DTO로 변환해 반환
        return ReviewDto.createReviewDto(created);
    }

    // 리뷰 수정
    @Transactional
    public ReviewDto update(Long reviewCode, ReviewDto reviewDto) {
        // 1. 리뷰 조회 및 예외 발생
        Review target = reviewRepository.findById(reviewCode)
                .orElseThrow(() -> new IllegalArgumentException("리뷰 수정 실패! 대상 리뷰가 없습니다."));
        // 2. 리뷰 수정
        target.patch(reviewDto);
        // 3. DB로 갱신
        Review updated = reviewRepository.save(target);
        // 4. 리뷰 엔티티를 DTO로 변환 및 반환
        return ReviewDto.createReviewDto(updated);
    }

    // 리뷰 삭제
    @Transactional
    public ReviewDto delete(Long reviewCode) {
        // 1. 리뷰 조회 및 예외 발생
        Review target = reviewRepository.findById(reviewCode)
                .orElseThrow(() -> new IllegalArgumentException("리뷰 삭제 실패! 대상이 없습니다."));
        // 2. 리뷰 삭제
        reviewRepository.delete(target);
        // 3. 삭제 리뷰를 DTO로 변환 및 반환
        return ReviewDto.createReviewDto(target);
    }

}
