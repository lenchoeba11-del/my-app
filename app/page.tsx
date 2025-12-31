// app/registration/page.tsx
'use client';

import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Paper,
  InputAdornment,
  IconButton,
  Alert,
  Divider,
  alpha,
} from '@mui/material';
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Code as CodeIcon,
  School as SchoolIcon,
  Visibility,
  VisibilityOff,
  ArrowForward,
  CheckCircle,
} from '@mui/icons-material';

export default function RegistrationPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    programmingLevel: 'beginner',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate API call
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          password: '',
          programmingLevel: 'beginner',
        });
        setSubmitted(false);
      }, 3000);
    }
  };

  const programmingLevels = [
    { value: 'beginner', label: '👶 Beginner' },
    { value: 'intermediate', label: '🚶 Intermediate' },
    { value: 'advanced', label: '🏃 Advanced' },
    { value: 'expert', label: '🔥 Expert' },
  ];

  const techStacks = [
    { name: 'React', color: '#61DAFB' },
    { name: 'Next.js', color: '#000000' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Node.js', color: '#339933' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'Material-UI', color: '#007FFF' },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Header Section - Minimalist */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: '#1a237e',
            mb: 1,
            letterSpacing: '-0.5px',
          }}
        >
          ABDII SABAA
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: '#3949ab',
            mb: 3,
            fontWeight: 500,
          }}
        >
          Coding Academy
        </Typography>
        
        <Divider sx={{ my: 3, mx: 'auto', width: '60px', borderWidth: 2, borderColor: '#ff9800' }} />
        
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            color: '#212121',
            mb: 2,
            fontSize: { xs: '1.75rem', sm: '2rem' },
          }}
        >
          AI Powered Fullstack
          <br />
          Application Development
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Left Column - Form */}
        <Grid container item xs={12} md={7}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4 },
              border: '1px solid #e0e0e0',
              borderRadius: 2,
              background: 'white',
            }}
          >
            {submitted ? (
              <Box sx={{ textAlign: 'center', py: 4 }}>
                <CheckCircle sx={{ fontSize: 60, color: '#4caf50', mb: 2 }} />
                <Typography variant="h5" sx={{ color: '#2e7d32', mb: 2, fontWeight: 600 }}>
                  Registration Successful!
                </Typography>
                <Typography color="text.secondary">
                  Welcome to ABDII SABAA Coding Academy.
                  <br />
                  We'll contact you with further details.
                </Typography>
              </Box>
            ) : (
              <>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#1a237e',
                    mb: 3,
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <PersonIcon />
                  Registration Form
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2.5}>
                    <Grid container item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name="firstName"
                        label="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        error={!!errors.firstName}
                        helperText={errors.firstName}
                        size="small"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonIcon fontSize="small" sx={{ color: '#757575' }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>

                    <Grid container item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name="lastName"
                        label="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        error={!!errors.lastName}
                        helperText={errors.lastName}
                        size="small"
                      />
                    </Grid>

                    <Grid container item xs={12}>
                      <TextField
                        fullWidth
                        name="email"
                        label="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        size="small"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <EmailIcon fontSize="small" sx={{ color: '#757575' }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>

                    <Grid container item xs={12}>
                      <TextField
                        fullWidth
                        name="phone"
                        label="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        error={!!errors.phone}
                        helperText={errors.phone}
                        size="small"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PhoneIcon fontSize="small" sx={{ color: '#757575' }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>

                    <Grid container item xs={12}>
                      <TextField
                        fullWidth
                        name="password"
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={handleChange}
                        error={!!errors.password}
                        helperText={errors.password}
                        size="small"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <CodeIcon fontSize="small" sx={{ color: '#757575' }} />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                size="small"
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end"
                              >
                                {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>

                    <Grid container item xs={12}>
                      <Typography variant="subtitle2" sx={{ mb: 1, color: '#666', fontWeight: 500 }}>
                        Programming Experience Level
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {programmingLevels.map((level) => (
                          <Button
                            key={level.value}
                            variant={formData.programmingLevel === level.value ? 'contained' : 'outlined'}
                            size="small"
                            onClick={() => setFormData(prev => ({ ...prev, programmingLevel: level.value }))}
                            sx={{
                              borderRadius: 1,
                              textTransform: 'none',
                              fontSize: '0.8rem',
                              px: 2,
                              py: 0.5,
                              minWidth: 'auto',
                              backgroundColor: formData.programmingLevel === level.value ? '#1a237e' : 'transparent',
                              borderColor: '#1a237e',
                              color: formData.programmingLevel === level.value ? 'white' : '#1a237e',
                              '&:hover': {
                                backgroundColor: formData.programmingLevel === level.value ? '#283593' : alpha('#1a237e', 0.04),
                              },
                            }}
                          >
                            {level.label}
                          </Button>
                        ))}
                      </Box>
                    </Grid>

                    <Grid container item xs={12} sx={{ pt: 2 }}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        endIcon={<ArrowForward />}
                        sx={{
                          py: 1.2,
                          borderRadius: 1,
                          background: 'linear-gradient(45deg, #1a237e, #3949ab)',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #0d1b68, #283593)',
                          },
                        }}
                      >
                        Register Now
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </>
            )}
          </Paper>
        </Grid>

        {/* Right Column - Info */}
        <Grid container item xs={12} md={5}>
          <Box sx={{ position: 'sticky', top: 20 }}>
            {/* Tech Stacks */}
            <Paper
              elevation={0}
              sx={{
                p: 3,
                border: '1px solid #e0e0e0',
                borderRadius: 2,
                mb: 3,
                background: 'white',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#1a237e',
                  mb: 3,
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <CodeIcon />
                Tech Stacks
              </Typography>
              
              <Grid container spacing={1.5}>
                {techStacks.map((tech) => (
                  <Grid container item xs={6} key={tech.name}>
                    <Box
                      sx={{
                        p: 1.5,
                        border: `1px solid ${tech.color}40`,
                        borderRadius: 1,
                        textAlign: 'center',
                        background: `${tech.color}10`,
                        transition: 'transform 0.2s',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          borderColor: tech.color,
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: tech.color,
                          fontSize: '0.9rem',
                        }}
                      >
                        {tech.name}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>

            {/* Next Class Info */}
            <Paper
              elevation={0}
              sx={{
                p: 3,
                border: '1px solid #e0e0e0',
                borderRadius: 2,
                background: 'white',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#1a237e',
                  mb: 2,
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <SchoolIcon />
                Next Class
              </Typography>
              
              <Box
                sx={{
                  p: 2,
                  background: 'linear-gradient(135deg, #1a237e20, #3949ab20)',
                  borderRadius: 1,
                  mb: 3,
                }}
              >
                <Typography
                  sx={{
                    color: '#1a237e',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    mb: 0.5,
                  }}
                >
                  Starts November 29th, 2025
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Limited seats available
                </Typography>
              </Box>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                }}
              >
                "Learning application development is fundamental in today's digital age, as it forms the cornerstone of the technology-driven world we live in."
              </Typography>
            </Paper>

            {/* Contact Info */}
            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Typography variant="caption" color="text.secondary">
                Need assistance?
                <br />
                Contact: admissions@abdiisabaa.org
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Footer */}
      <Box sx={{ textAlign: 'center', mt: 6, pt: 3, borderTop: '1px solid #e0e0e0' }}>
        <Typography variant="body2" color="text.secondary">
          © 2024 ABDII SABAA Coding Academy. Empowering developers for the future.
        </Typography>
      </Box>
    </Container>
  );
}