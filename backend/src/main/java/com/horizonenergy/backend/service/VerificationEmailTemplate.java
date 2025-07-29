package com.horizonenergy.backend.service;

public class VerificationEmailTemplate {
    public static String buildVerificationEmail(String verificationLink) {
        return "Welcome to Horizon Energy!\n\n" +
               "Please verify your email address by clicking the link below:\n" +
               verificationLink + "\n\n" +
               "If you did not sign up, you can ignore this email.";
    }
} 