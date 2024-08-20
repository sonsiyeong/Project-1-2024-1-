package com.example.backend.entity;

import com.example.backend.dto.ProductDto;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.function.Consumer;
import java.util.function.Supplier;

@Table(name = "PRODUCTS")
@Entity // 해당 클래스가 엔티티임을 선언, 클래스 필드를 바탕으로 DB에 테이블 생성
@Getter // 각 필드 값을 조회할 수 있는 getter 메서드 자동 생성
@Setter // 각 필드 값을 설정할 수 있는 setter 메서드 자동 생성
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

    // 갱신 메서드
    private <T> void updateFieldIfNotNull(Supplier<T> getter, Consumer<T> setter, ProductDto productDto) {
        T value = getter.get();
        if (value != null) {
            setter.accept(value);
            this.productLastUpdate = productDto.getProductLastUpdate();
        }
    }

    public void patch(ProductDto productDto) {
        // 예외 발생
        if (this.productCode != productDto.getProductCode())
            throw new IllegalArgumentException("상품 수정 실패! 잘못된 상품 code가 입력됐습니다.");
        // 객체 갱신
        updateFieldIfNotNull(productDto::getProductName, this::setProductName, productDto);
        updateFieldIfNotNull(productDto::getProductType, this::setProductType, productDto);
        updateFieldIfNotNull(productDto::getProductInterestRate, this::setProductInterestRate, productDto);
        updateFieldIfNotNull(productDto::getProductInterestTopRate, this::setProductInterestTopRate, productDto);
        updateFieldIfNotNull(productDto::getProductBank, this::setProductBank, productDto);
        updateFieldIfNotNull(productDto::getProductAge, this::setProductAge, productDto);
        updateFieldIfNotNull(productDto::getProductAmount, this::setProductAmount, productDto);
        updateFieldIfNotNull(productDto::getProductUrl, this::setProductUrl, productDto);
        updateFieldIfNotNull(productDto::getProductTerm, this::setProductTerm, productDto);
        updateFieldIfNotNull(productDto::getProductBenefit, this::setProductBenefit, productDto);
        updateFieldIfNotNull(productDto::getProductDescription, this::setProductDescription, productDto);
        updateFieldIfNotNull(productDto::getProductFeat1, this::setProductFeat1, productDto);
        updateFieldIfNotNull(productDto::getProductFeat2, this::setProductFeat2, productDto);
        updateFieldIfNotNull(productDto::getProductFeat3, this::setProductFeat3, productDto);
    }
}
