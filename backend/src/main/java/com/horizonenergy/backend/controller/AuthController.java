package com.horizonenergy.backend.controller;

import com.horizonenergy.backend.model.EmailVerificationToken;
import com.horizonenergy.backend.model.EmailVerificationTokenRepository;
import com.horizonenergy.backend.model.User;
import com.horizonenergy.backend.service.EmailService;
import com.horizonenergy.backend.service.UserService;
import com.horizonenergy.backend.service.VerificationEmailTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {
    @Autowired
    private UserService userService;

    @Autowired
    private EmailService emailService;

    @Autowired
    private EmailVerificationTokenRepository emailVerificationTokenRepository;

    @Value("${app.frontend.base-url:http://localhost:5173}")
    private String frontendBaseUrl;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        try {
            // Register user and generate verification token
            String token = userService.registerUserWithVerification(user);
            String verificationLink = frontendBaseUrl + "/verify-email?token=" + token;
            String emailBody = VerificationEmailTemplate.buildVerificationEmail(verificationLink);
            emailService.sendEmail(user.getEmail(), "Verify your email address", emailBody);

            Map<String, Object> response = new HashMap<>();
            response.put("message", "User registered successfully. Please check your email to verify your account.");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, String> error = new HashMap<>();
            error.put("error", "Registration failed: " + e.getMessage());
            return ResponseEntity.badRequest().body(error);
    }
    }

    @GetMapping("/test")
    public ResponseEntity<Map<String, String>> test() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Auth API is working!");
        response.put("status", "success");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/verify-email")
    public ResponseEntity<?> verifyEmail(@RequestParam("token") String token) {
        EmailVerificationToken verificationToken = emailVerificationTokenRepository.findByToken(token).orElse(null);
        if (verificationToken == null) {
            return ResponseEntity.badRequest().body(Map.of("error", "Invalid or expired verification token."));
        }
        if (verificationToken.getExpiresAt().isBefore(LocalDateTime.now())) {
            emailVerificationTokenRepository.delete(verificationToken);
            return ResponseEntity.badRequest().body(Map.of("error", "Verification token has expired."));
        }
        User user = verificationToken.getUser();
        user.setEmailVerified(true);
        userService.saveUser(user);
        emailVerificationTokenRepository.delete(verificationToken);
        return ResponseEntity.ok(Map.of("message", "Email verified successfully."));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginRequest) {
        try {
            String email = loginRequest.get("email");
            String password = loginRequest.get("password");
            
            User user = userService.findByEmail(email);
            if (user != null && userService.validatePassword(password, user.getPassword())) {
                if (!user.isEmailVerified()) {
                    Map<String, String> error = new HashMap<>();
                    error.put("error", "Email not verified. Please check your email for the verification link.");
                    return ResponseEntity.status(403).body(error);
                }
                Map<String, Object> response = new HashMap<>();
                response.put("message", "Login successful");
                response.put("user", user);
                return ResponseEntity.ok(response);
            } else {
                Map<String, String> error = new HashMap<>();
                error.put("error", "Invalid email or password");
                return ResponseEntity.badRequest().body(error);
            }
        } catch (Exception e) {
            Map<String, String> error = new HashMap<>();
            error.put("error", "Login failed: " + e.getMessage());
            return ResponseEntity.badRequest().body(error);
        }
    }

    @PostMapping("/resend-verification")
    public ResponseEntity<?> resendVerification(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        User user = userService.findByEmail(email);
        // Always return the same response to avoid revealing registration status
        String genericMsg = "If your email is registered and not yet verified, you will receive a verification email.";
        if (user == null || user.isEmailVerified()) {
            return ResponseEntity.ok(Map.of("message", genericMsg));
        }
        // Generate new token and send email
        String token = userService.registerUserWithVerification(user);
        String verificationLink = frontendBaseUrl + "/verify-email?token=" + token;
        String emailBody = VerificationEmailTemplate.buildVerificationEmail(verificationLink);
        emailService.sendEmail(user.getEmail(), "Verify your email address", emailBody);
        return ResponseEntity.ok(Map.of("message", genericMsg));
    }
} 