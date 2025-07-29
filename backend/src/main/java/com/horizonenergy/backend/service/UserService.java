package com.horizonenergy.backend.service;

import com.horizonenergy.backend.model.User;
import com.horizonenergy.backend.model.UserRepository;
import com.horizonenergy.backend.model.EmailVerificationToken;
import com.horizonenergy.backend.model.EmailVerificationTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.security.SecureRandom;
import java.math.BigInteger;
import java.time.LocalDateTime;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private EmailVerificationTokenRepository emailVerificationTokenRepository;

    public User registerUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public String registerUserWithVerification(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setEmailVerified(false);
        User savedUser = userRepository.save(user);

        // Generate secure random token
        SecureRandom random = new SecureRandom();
        String token = new BigInteger(130, random).toString(32);
        LocalDateTime expiresAt = LocalDateTime.now().plusHours(1);

        // Remove any existing token for this user
        emailVerificationTokenRepository.deleteByUser(savedUser);

        // Store token
        EmailVerificationToken verificationToken = new EmailVerificationToken();
        verificationToken.setToken(token);
        verificationToken.setUser(savedUser);
        verificationToken.setExpiresAt(expiresAt);
        emailVerificationTokenRepository.save(verificationToken);

        return token;
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }

    public boolean validatePassword(String rawPassword, String encodedPassword) {
        return passwordEncoder.matches(rawPassword, encodedPassword);
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }
} 