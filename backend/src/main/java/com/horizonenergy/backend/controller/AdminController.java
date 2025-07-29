package com.horizonenergy.backend.controller;

import com.horizonenergy.backend.model.User;
import com.horizonenergy.backend.model.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*")
public class AdminController {
    
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers(@RequestParam(value = "unverified", required = false) Boolean unverified) {
        List<User> users = userRepository.findAll();
        if (unverified != null && unverified) {
            users = users.stream().filter(u -> !u.isEmailVerified()).toList();
        }
        return ResponseEntity.ok(users);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        Optional<User> user = userRepository.findById(id);
        return user.map(ResponseEntity::ok)
                  .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        Optional<User> userOptional = userRepository.findById(id);
        
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            user.setFirstName(userDetails.getFirstName());
            user.setLastName(userDetails.getLastName());
            user.setEmail(userDetails.getEmail());
            user.setCompanyName(userDetails.getCompanyName());
            user.setRole(userDetails.getRole());
            
            // Update role-specific fields
            if (userDetails.getRole() == com.horizonenergy.backend.model.Role.INSTALLER) {
                user.setInstallerCertificationNumber(userDetails.getInstallerCertificationNumber());
                user.setPrimaryServiceArea(userDetails.getPrimaryServiceArea());
                user.setYearsOfExperience(userDetails.getYearsOfExperience());
            } else if (userDetails.getRole() == com.horizonenergy.backend.model.Role.DISTRIBUTOR) {
                user.setPrimaryDistributionRegion(userDetails.getPrimaryDistributionRegion());
                user.setEstimatedAnnualSalesVolume(userDetails.getEstimatedAnnualSalesVolume());
                user.setNumberOfActiveClients(userDetails.getNumberOfActiveClients());
            } else if (userDetails.getRole() == com.horizonenergy.backend.model.Role.FINANCIAL_CUSTOMER) {
                user.setAreaOfInterest(userDetails.getAreaOfInterest());
                user.setEstimatedInvestmentCapital(userDetails.getEstimatedInvestmentCapital());
                user.setPreferredContactMethod(userDetails.getPreferredContactMethod());
            }
            
            User updatedUser = userRepository.save(user);
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            userRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/stats")
    public ResponseEntity<Object> getStats() {
        List<User> allUsers = userRepository.findAll();
        
        long totalUsers = allUsers.size();
        long installers = allUsers.stream().filter(u -> u.getRole() == com.horizonenergy.backend.model.Role.INSTALLER).count();
        long distributors = allUsers.stream().filter(u -> u.getRole() == com.horizonenergy.backend.model.Role.DISTRIBUTOR).count();
        long financialCustomers = allUsers.stream().filter(u -> u.getRole() == com.horizonenergy.backend.model.Role.FINANCIAL_CUSTOMER).count();
        long admins = allUsers.stream().filter(u -> u.getRole() == com.horizonenergy.backend.model.Role.ADMIN).count();
        
        return ResponseEntity.ok(Map.of(
            "totalUsers", totalUsers,
            "installers", installers,
            "distributors", distributors,
            "financialCustomers", financialCustomers,
            "admins", admins
        ));
    }
} 