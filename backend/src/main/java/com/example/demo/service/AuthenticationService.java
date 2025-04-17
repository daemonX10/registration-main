package com.example.demo.service;

import com.example.demo.dto.AuthResponse;
import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.RegisterRequest;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private static final Logger logger = LoggerFactory.getLogger(AuthenticationService.class);

    public AuthResponse register(RegisterRequest request) {
        logger.debug("Starting registration process for email: {}", request.getEmail());
        
        if (userRepository.existsByEmail(request.getEmail())) {
            logger.warn("Registration failed: Email already exists: {}", request.getEmail());
            throw new IllegalArgumentException("Email already exists");
        }

        var user = User.builder()
                .email(request.getEmail())
                .username(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .build();

        userRepository.save(user);
        logger.debug("User saved to database: {}", user.getEmail());
        
        var jwtToken = jwtService.generateToken(user);
        logger.info("Registration successful for user: {}", user.getEmail());
        
        return new AuthResponse(jwtToken, "User registered successfully");
    }

    public AuthResponse login(LoginRequest request) {
        logger.debug("Starting login process for email: {}", request.getEmail());
        
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );
            logger.debug("Authentication successful for user: {}", request.getEmail());
        } catch (Exception e) {
            logger.error("Authentication failed for user: {}", request.getEmail(), e);
            throw e;
        }

        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> {
                    logger.error("User not found: {}", request.getEmail());
                    return new RuntimeException("User not found");
                });

        var jwtToken = jwtService.generateToken(user);
        logger.info("Login successful for user: {}", user.getEmail());
        
        return new AuthResponse(jwtToken, "Login successful");
    }
} 