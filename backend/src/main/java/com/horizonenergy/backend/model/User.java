package com.horizonenergy.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String companyName;

    @Enumerated(EnumType.STRING)
    private Role role;

    // Installer fields
    private String installerCertificationNumber;
    private String primaryServiceArea;
    private Integer yearsOfExperience;

    // Distributor fields
    private String primaryDistributionRegion;
    private String estimatedAnnualSalesVolume;
    private Integer numberOfActiveClients;

    // Financial Customer fields
    private String areaOfInterest;
    private String estimatedInvestmentCapital;
    private String preferredContactMethod;

    // Email verification
    private boolean emailVerified = false;
} 