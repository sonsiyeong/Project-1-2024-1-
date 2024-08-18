package com.example.backend.repository;

import com.example.backend.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    @Query(value = "SELECT * FROM REVIEWS WHERE review_code = :review_code", nativeQuery = true)
    Review ReviewByReviewCode(Long review_code);

    @Query(value = "SELECT * FROM REVIEWS WHERE product_code = :product_code", nativeQuery = true)
    List<Review> ReviewsByProductCode(Long product_code);

    @Query(value = "SELECT * FROM REVIEWS WHERE user_code = :user_code", nativeQuery = true)
    List<Review> ReviewsByUserCode(Long user_code);
}
