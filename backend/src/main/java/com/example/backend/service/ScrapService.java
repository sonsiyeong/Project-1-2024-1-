package com.example.backend.service;

import com.example.backend.dto.ScrapDto;
import com.example.backend.entity.Product;
import com.example.backend.entity.Scrap;
import com.example.backend.entity.User;
import com.example.backend.repository.ProductRepository;
import com.example.backend.repository.ScrapRepository;
import com.example.backend.repository.UserRepository;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ScrapService {

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ScrapRepository scrapRepository;
    @Autowired
    private UserRepository userRepository;


    public ScrapDto scrapByScrapCode(Long scrapCode){
        Scrap scrap=scrapRepository.ScrapByScrapCode(scrapCode);
        return ScrapDto.createScrapDto(scrap);
    }

    // 사용자 코드에 대한 스크랩 리스트
    public List<ScrapDto> scrapsByUserCode(Long userCode){
        List<Scrap> scraps=scrapRepository.ScrapByUserCode(userCode);
        return scraps.stream()
                .map(ScrapDto::createScrapDto)
                .collect(Collectors.toList());
    }

    // 스크랩 저장
    @Transactional
    public ScrapDto save(Long userCode, ScrapDto scrapDto) {
        // 상품 조회 및 예외 발생
        Product product=productRepository.findById(scrapDto.getProductCode())
                .orElseThrow(() -> new IllegalArgumentException("스크랩 생성 실패! 대상 상품이 없습니다."));
        // 사용자 조회 및 예외 발생
        User user=userRepository.findById(userCode)
                .orElseThrow(() -> new IllegalArgumentException("스크랩 생성 실패! 사용자가 존재하지 않습니다."));
        // 스크랩 엔티티 생성
        Scrap scrap = Scrap.createScrap(scrapDto, product, user);
        // 스크랩 엔티티를 DB에 저장
        Scrap saved=scrapRepository.save(scrap);
        // DTO로 변환해 반환
        return ScrapDto.createScrapDto(saved);
    }

    // 스크랩 삭제
    @Transactional
    public ScrapDto delete(Long scrapCode) {
        // 스크랩 조회 및 예외 발생
        Scrap target=scrapRepository.findById(scrapCode)
                .orElseThrow(() -> new IllegalArgumentException("스크랩 삭제 실패! 대상 스크랩이 없습니다."));
        // 스크랩 삭제
        scrapRepository.delete(target);
        // 삭제 스크랩을 DTO로 변환 및 반환
        return ScrapDto.createScrapDto(target);
    }

}
