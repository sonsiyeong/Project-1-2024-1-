package com.example.backend.dto;

import com.example.backend.entity.Scrap;
import lombok.*;

import java.time.LocalDate;

@AllArgsConstructor // 모든 필드를 매개변수로 갖는 생성자 자동 생성
@NoArgsConstructor // 매개변수가 아예 없는 기본 생성자 자동 생성
@Getter // 각 필드 값을 조회할 수 있는 getter 메서드 자동 생성
@Setter // 각 필드 값을 설정할 수 있는 setter 메서드 자동 생성
@ToString // 모든 필드를 출력할 수 있는 toString 메서드 자동 생성

public class ScrapDto {

    private Long scrapCode;
    private LocalDate scrapTime;
    private Long productCode;
    private Long userCode;

    public static ScrapDto createScrapDto(Scrap scrap){
        return new ScrapDto(
                scrap.getScrapCode(),
                scrap.getScrapTime(),
                scrap.getProduct().getProductCode(),
                scrap.getUser().getUserCode()
        );
    }
}
