package com.example.backend.entity;

import com.example.backend.dto.ScrapDto;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;

@Table(name = "SCRAPS")
@Entity // 해당 클래스가 엔티티임을 선언, 클래스 필드를 바탕으로 DB에 테이블 생성
@Getter // 각 필드 값을 조회할 수 있는 getter 메서드 자동 생성
@ToString // 모든 필드를 출력할 수 있는 toString 메서드 자동 생성
@AllArgsConstructor // 모든 필드를 매개변수로 갖는 생성자 자동 생성
@NoArgsConstructor // 매개변수가 아예 없는 기본 생성자 자동 생성

public class Scrap {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="scrap_code")
    private Long scrapCode;

    @Column(name = "scrap_time", insertable = false, updatable = false)
    private LocalDate scrapTime;

    @ManyToOne
    @JoinColumn(name="product_code")
    @JsonManagedReference
    private Product product;

    @ManyToOne
    @JoinColumn(name="user_code")
    @JsonManagedReference
    private User user;

    public static Scrap createScrap(ScrapDto scrapDto, Product product, User user) {
        // 예외 발생
        if(scrapDto.getScrapCode() != null)
            throw new IllegalArgumentException("스크랩 생성 실패! 스크랩 code는 중복될 수 없습니다.");
        if(scrapDto.getProductCode() != product.getProductCode())
            throw new IllegalArgumentException("스크랩 생성 실패! 상품 code가 잘못됐습니다.");
        if(scrapDto.getUserCode() != user.getUserCode())
            throw new IllegalArgumentException("스크랩 생성 실패! 사용자 code가 잘못됐습니다.");

        return new Scrap(
                scrapDto.getScrapCode(),
                scrapDto.getScrapTime(),
                product,
                user
        );
    }
}
