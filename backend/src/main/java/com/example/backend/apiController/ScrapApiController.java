package com.example.backend.apiController;

import com.example.backend.dto.ResponseDto;
import com.example.backend.dto.ScrapDto;
import com.example.backend.service.ScrapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ScrapApiController {

    @Autowired
    ScrapService scrapService;

    // 유저에 대한 모든 스크랩
    @PreAuthorize("hasRole('USER')")
    @GetMapping("/api/users/{userCode}/scraps")
    public ResponseEntity<ResponseDto<?>> scraps(@PathVariable Long userCode) {
        try {
            // 서비스에 위임
            List<ScrapDto> dtos = scrapService.scrapsByUserCode(userCode);
            // 결과 응답
            return ResponseEntity.ok(new ResponseDto<>("스크랩을 성공적으로 조회하였습니다.", dtos));
        } catch (Exception e) {
            ResponseDto<String> responseDto = new ResponseDto<>(e.getMessage(), null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseDto);
        }
    }

    // 스크랩 저장
    @PreAuthorize("hasRole('USER')")
    @PostMapping("/api/users/{userCode}/scraps")
    public ResponseEntity<ResponseDto<?>> save(@PathVariable Long userCode, @RequestBody ScrapDto dto) {
        try {
            // 서비스에 위임
            ScrapDto savedDto = scrapService.save(userCode, dto);
            ScrapDto responseDto=scrapService.scrapByScrapCode(savedDto.getScrapCode());
            // 결과 응답
            return ResponseEntity.ok(new ResponseDto<>("스크랩을 성공적으로 저장하였습니다.", responseDto));
        } catch (Exception e) {
            ResponseDto<String> responseDto = new ResponseDto<>(e.getMessage(), null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseDto);
        }
    }

    // 스크랩 삭제
    @PreAuthorize("hasRole('USER')")
    @DeleteMapping("/api/scraps/{scrapCode}")
    public ResponseEntity<ResponseDto<?>> delete(@PathVariable Long scrapCode) {
        try {
            // 서비스에 위임
            ScrapDto deletedDto = scrapService.delete(scrapCode);
            // 결과 응답
            return ResponseEntity.ok(new ResponseDto<>("스크랩을 성공적으로 삭제하였습니다.", deletedDto));
        } catch (Exception e) {
            ResponseDto<String> responseDto = new ResponseDto<>(e.getMessage(), null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseDto);
        }
    }
}
