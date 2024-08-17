package com.example.backend.repository;

import com.example.backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    @Query(value = "SELECT * FROM products WHERE product_code = :product_code", nativeQuery = true)
    Product findByProductCode(Long product_code);

    @Query(value = "SELECT * FROM products WHERE product_type = :product_type", nativeQuery = true)
    List<Product> findByProductType(String product_type);

    @Override
    ArrayList<Product> findAll();

    List<Product> findByProductBank(String productBank);
}
