package com.example.backend.entity;

import com.example.backend.dto.ProductDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.math.BigDecimal;
import java.time.LocalDate;

@Table(name = "PRODUCTS")
@Entity // 해당 클래스가 엔티티임을 선언, 클래스 필드를 바탕으로 DB에 테이블 생성
@Getter // 각 필드 값을 조회할 수 있는 getter 메서드 자동 생성
@ToString // 모든 필드를 출력할 수 있는 toString 메서드 자동 생성
@AllArgsConstructor // 모든 필드를 매개변수로 갖는 생성자 자동 생성
@NoArgsConstructor // 매개변수가 아예 없는 기본 생성자 자동 생성

public class Product {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="product_code")
    private Long productCode;

    @Column(name = "product_name")
    private String productName;

    @Column(name="product_type")
    private String productType;

    @Column(name = "product_interest_rate")
    private BigDecimal productInterestRate;

    @Column(name = "product_interest_top_rate")
    private BigDecimal productInterestTopRate;

    @Column(name = "product_bank")
    private String productBank;

    @Column(name = "product_age")
    private String productAge;

    @Column(name = "product_amount")
    private String productAmount;

    @Column(name = "product_url")
    private String productUrl;

    @Column(name = "product_term")
    private String productTerm;

    @Column(name = "product_benefit")
    private String productBenefit;

    @Column(name="product_description")
    private String productDescription;

    @Column(name = "product_last_update", insertable = false, updatable = false) //MySQL이 자동으로 현재 시각 등록
    private LocalDate productLastUpdate;

    @Column(name="product_feat1")
    private String productFeat1;

    @Column(name="product_feat2")
    private String productFeat2;

    @Column(name="product_feat3")
    private String productFeat3;

    public static Product createProduct(ProductDto productDto) {
        // 예외 발생
        if(productDto.getProductCode() != null)
            throw new IllegalArgumentException("상품 생성 실패! 상품 code는 중복될 수 없습니다.");

        return new Product(
                productDto.getProductCode(),
                productDto.getProductName(),
                productDto.getProductType(),
                productDto.getProductInterestRate(),
                productDto.getProductInterestTopRate(),
                productDto.getProductBank(),
                productDto.getProductAge(),
                productDto.getProductAmount(),
                productDto.getProductUrl(),
                productDto.getProductTerm(),
                productDto.getProductBenefit(),
                productDto.getProductDescription(),
                productDto.getProductLastUpdate(),
                productDto.getProductFeat1(),
                productDto.getProductFeat2(),
                productDto.getProductFeat3()
        );
    }

    public void patch(ProductDto productDto) {
        // 예외 발생
        if (this.productCode != productDto.getProductCode())
            throw new IllegalArgumentException("상품 수정 실패! 잘못된 상품 code가 입력됐습니다.");
        // 객체 갱신
        if (productDto.getProductName() != null) { // 수정할 name이 있다면
            this.productName = productDto.getProductName();
            this.productLastUpdate = productDto.getProductLastUpdate();
        }
        if (productDto.getProductType() != null) { // 수정할 type이 있다면
            this.productType = productDto.getProductType();
            this.productLastUpdate = productDto.getProductLastUpdate();
        }
        if (productDto.getProductInterestRate() != null) {// 수정할 interest rate이 있다면
            this.productInterestRate = productDto.getProductInterestRate();
            this.productLastUpdate = productDto.getProductLastUpdate();
        }
        if (productDto.getProductInterestTopRate() != null) { // 수정할 interest top rate이 있다면
            this.productInterestTopRate = productDto.getProductInterestTopRate();
            this.productLastUpdate = productDto.getProductLastUpdate();
        }
        if (productDto.getProductBank() != null) { // 수정할 bank가 있다면
            this.productBank = productDto.getProductBank();
            this.productLastUpdate = productDto.getProductLastUpdate();
        }
        if (productDto.getProductAge() != null){ // 수정할 age가 있다면
            this.productAge =productDto.getProductAge();
            this.productLastUpdate = productDto.getProductLastUpdate();
        }
        if (productDto.getProductAmount() != null){ // 수정할 amount가 있다면
            this.productAmount =productDto.getProductAmount();
            this.productLastUpdate = productDto.getProductLastUpdate();
        }
        if (productDto.getProductUrl() != null){ // 수정할 url이 있다면
            this.productUrl =productDto.getProductUrl();
            this.productLastUpdate = productDto.getProductLastUpdate();
        }
        if (productDto.getProductTerm() != null){ // 수정할 term이 있다면
            this.productTerm =productDto.getProductTerm();
            this.productLastUpdate = productDto.getProductLastUpdate();
        }
        if (productDto.getProductBenefit() != null){ // 수정할 benefit이 있다면
            this.productBenefit =productDto.getProductBenefit();
            this.productLastUpdate = productDto.getProductLastUpdate();
        }
        if (productDto.getProductDescription() != null){ // 수정할 description이 있다면
            this.productDescription = productDto.getProductDescription();
            this.productLastUpdate = productDto.getProductLastUpdate();
        }
        if (productDto.getProductFeat1() != null){ // 수정할 feat1이 있다면
            this.productFeat1 = productDto.getProductFeat1();
            this.productLastUpdate = productDto.getProductLastUpdate();
        }
        if (productDto.getProductFeat2() != null){ // 수정할 feat2가 있다면
            this.productFeat2 = productDto.getProductFeat2();
            this.productLastUpdate = productDto.getProductLastUpdate();
        }
        if (productDto.getProductFeat3() != null){ // 수정할 feat3이 있다면
            this.productFeat3 = productDto.getProductFeat3();
            this.productLastUpdate = productDto.getProductLastUpdate();
        }
    }
}
