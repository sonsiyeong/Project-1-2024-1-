package com.example.backend.s3;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/s3")
@RequiredArgsConstructor
public class S3Controller {
    private final S3Service s3Service;

    @GetMapping("image/{fileName}")
    public String getImageUrl(@PathVariable String fileName){
        System.out.println("Requested file name : " + fileName);
        return s3Service.getFileUrl(fileName);
    }
}
