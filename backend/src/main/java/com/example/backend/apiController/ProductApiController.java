package com.example.backend.apiController;

import com.example.backend.dto.ProductDetailDto;
import com.example.backend.dto.ProductDto;
import com.example.backend.dto.ProductTypeDto;
import com.example.backend.dto.ResponseDto;
import com.example.backend.service.ReviewService;
import com.example.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class ProductApiController {

    @Autowired
    private ProductService productService;
    @Autowired
    private ReviewService reviewService;

    // 상품 상세 페이지
    @GetMapping("/api/products/{productCode}")
    public ResponseEntity<ResponseDto<?>> getProductByCode(@PathVariable Long productCode) {
        try {
            ProductDetailDto dtos = productService.productsByCode(productCode);
            dtos.setReviewDtoList(reviewService.reviewsByProductCode(productCode));
            return ResponseEntity.ok(new ResponseDto<>("상품을 성공적으로 조회하였습니다.", dtos));
        } catch (Exception e) {
            ResponseDto<String> responseDto = new ResponseDto<>(e.getMessage(), null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseDto);
        }
    }

    // 상품 비교 페이지
    @GetMapping("/api/products/productType/{productType}")
    public ResponseEntity<ResponseDto<?>> getProductByType(@PathVariable String productType) {
        try {
            Map<String, List<ProductTypeDto>> dtos = productService.productByType(productType);
            return ResponseEntity.ok(new ResponseDto<>("상품을 성공적으로 조회하였습니다.", dtos));
        } catch (Exception e) {
            ResponseDto<String> responseDto = new ResponseDto<>(e.getMessage(), null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseDto);
        }
    }

    // 상품 등록
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/api/products")
    public ResponseEntity<ResponseDto<?>> create(@RequestBody ProductDto productDto){
        try {
            ProductDto dtos = productService.create(productDto);
            ProductDto responseDto=productService.productByCode(dtos.getProductCode());
            return ResponseEntity.ok(new ResponseDto<>("상품을 성공적으로 등록하였습니다.", responseDto));
        } catch (Exception e) {
            ResponseDto<String> responseDto = new ResponseDto<>(e.getMessage(), null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseDto);
        }
    }

    // 상품 수정
    @PreAuthorize("hasRole('ADMIN')")
    @PatchMapping("/api/products/{productCode}")
    public ResponseEntity<ResponseDto<?>> update(@PathVariable Long productCode, @RequestBody ProductDto productDto){
        try{
            ProductDto dtos=productService.update(productCode, productDto);
            return ResponseEntity.ok(new ResponseDto<>("상품을 성공적으로 수정하였습니다.", dtos));
        } catch (Exception e) {
            ResponseDto<String> responseDto = new ResponseDto<>(e.getMessage(), null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseDto);
        }
    }

    // 상품 삭제
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/api/products/{productCode}")
    public ResponseEntity<ResponseDto<?>> delete(@PathVariable Long productCode){
        try {
            ProductDto dtos = productService.delete(productCode);
            return ResponseEntity.ok(new ResponseDto<>("상품을 성공적으로 삭제하였습니다.", dtos));
        } catch (Exception e) {
            ResponseDto<String> responseDto = new ResponseDto<>(e.getMessage(), null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseDto);
        }
    }

    // 은행명으로 상품 검색
    @GetMapping("/api/products/searchByBank")
    public ResponseEntity<ResponseDto<List<ProductTypeDto>>> searchProductsByBank(@RequestParam String productBank) {
        try {
            List<ProductTypeDto> dtos = productService.searchProductByBank(productBank);
            return ResponseEntity.ok(new ResponseDto<>("상품을 성공적으로 조회하였습니다.", dtos));
        } catch (Exception e) {
            ResponseDto<List<ProductTypeDto>> responseDto = new ResponseDto<>(e.getMessage(), null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseDto);
        }
    }
}
