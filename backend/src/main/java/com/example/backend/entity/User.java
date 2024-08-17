package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "USERS")
@Entity // 해당 클래스가 엔티티임을 선언, 클래스 필드를 바탕으로 DB에 테이블 생성
@Getter // 각 필드 값을 조회할 수 있는 getter 메서드 자동 생성
@Setter
@ToString // 모든 필드를 출력할 수 있는 toString 메서드 자동 생성
@AllArgsConstructor // 모든 필드를 매개변수로 갖는 생성자 자동 생성
@NoArgsConstructor // 매개변수가 아예 없는 기본 생성자 자동 생성

public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="user_code")
    private Long userCode;

    @Column(name = "user_id")
    private String userId;

    @Column(name="user_name")
    private String userName;

    @Column(name = "user_pw")
    private String password;

    @Column(name="user_email")
    private String email;

    @Column(name="user_role")
    private String userRole; // 권한 : USER, ADMIN
}
