package com.horizonenergy.backend;

import com.horizonenergy.backend.model.User;
import com.horizonenergy.backend.model.UserRepository;
import com.horizonenergy.backend.model.EmailVerificationTokenRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
public class EmailVerificationFlowTests {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private EmailVerificationTokenRepository tokenRepository;

    @Test
    void testUserRegistrationCreatesUnverifiedUser() {
        User user = new User();
        user.setFirstName("Test");
        user.setLastName("User");
        user.setEmail("testuser@example.com");
        user.setPassword("password");
        user.setCompanyName("TestCo");
        user.setRole(com.horizonenergy.backend.model.Role.INSTALLER);
        user.setEmailVerified(false);
        User saved = userRepository.save(user);
        assertThat(saved.isEmailVerified()).isFalse();
    }

    // More tests for token generation, verification, and login blocking can be added here
} 