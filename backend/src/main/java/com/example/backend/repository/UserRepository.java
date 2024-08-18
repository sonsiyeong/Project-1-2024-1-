package com.example.backend.repository;


import com.example.backend.dto.MyPageDto;
import com.example.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long>, CrudRepository<User, Long> {

    @Query(value="select * from USERS where user_code=:user_code", nativeQuery = true)
    User UserByUserCode(Long user_code);

    @Override
    ArrayList<User> findAll();

    boolean existsByUserId(String userId);
    Optional<User> findByUserId(String userId);
}
