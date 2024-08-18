package com.example.backend.dto;

import com.example.backend.entity.User;
import lombok.*;


@AllArgsConstructor // 모든 필드를 매개변수로 갖는 생성자 자동 생성
@NoArgsConstructor // 매개변수가 아예 없는 기본 생성자 자동 생성
@Getter // 각 필드 값을 조회할 수 있는 getter 메서드 자동 생성
@Setter // 각 필드 값을 설정할 수 있는 setter 메서드 자동 생성
@ToString // 모든 필드를 출력할 수 있는 toString 메서드 자동 생성

@Data
public class UserDto {

    private Long userCode;
    private String userId;
    private String userName;
    private String userPw;
    private String email;

    public static UserDto createUserDto(User user){
        return new UserDto(
                user.getUserCode(),
                user.getUserId(),
                user.getUserName(),
                user.getPassword(),
                user.getEmail()
        );
    }
}
