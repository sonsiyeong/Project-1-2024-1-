package com.example.backend.config;

import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
public class AdminConfig {

    @Bean
    CommandLineRunner createAdmin(UserRepository userRepository){
        return args -> {
            if(!userRepository.existsByUserId("admin")){
                User admin = new User();
                admin.setUserId("admin");
                admin.setPassword(new BCryptPasswordEncoder().encode("adminpassword"));
                admin.setUserName("Admin");
                admin.setEmail("admin@example.com");
                admin.setUserRole("ADMIN");
                userRepository.save(admin);
            }
        };
    }
}
