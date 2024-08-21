package com.example.backend.dto;

import com.example.backend.entity.Product;
import lombok.*;

import java.util.Arrays;
import java.util.List;

@AllArgsConstructor // 모든 필드를 매개변수로 갖는 생성자 자동 생성
@NoArgsConstructor // 매개변수가 아예 없는 기본 생성자 자동 생성
@Getter // 각 필드 값을 조회할 수 있는 getter 메서드 자동 생성
@Setter // 각 필드 값을 설정할 수 있는 setter 메서드 자동 생성
@ToString // 모든 필드를 출력할 수 있는 toString 메서드 자동 생성

public class ProductTypeDto { // 상품 비교 페이지

    private Long productCode;
    private String productName;
    private List<String> productFeat;

    public static ProductTypeDto createProductDto(Product product){
        List<String> feats= Arrays.asList(
                product.getProductFeat1(),
                product.getProductFeat2(),
                product.getProductFeat3()
        );
        return new ProductTypeDto(
                product.getProductCode(),
                product.getProductName(),
                feats
        );
    }
}
