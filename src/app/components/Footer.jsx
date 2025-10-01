import { 
  Box, 
  Typography, 
  Container, 
  Link, 
  Grid, 
  IconButton, 
  Chip,
  Fade,
  Slide,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { 
  GitHub, 
  Twitter, 
  LinkedIn, 
  Public,
  Security,
  Speed,
  TrendingUp,
  Cloud,
  WbSunny,
  AcUnit,
} from '@mui/icons-material'
import { useState, useEffect } from 'react'
import FooterBackground from './FooterBackground'

export const Footer = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'))
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const quickLinks = [
    { label: 'Dashboard', href: '/home', icon: <TrendingUp /> },
    { label: 'About', href: '/about', icon: <Public /> },
    { label: 'NWS Data', href: 'https://www.weather.gov', external: true, icon: <Cloud /> },
    { label: 'GitHub', href: 'https://github.com', external: true, icon: <GitHub /> },
  ]

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com', icon: <GitHub />, color: '#333' },
    { label: 'Twitter', href: 'https://twitter.com', icon: <Twitter />, color: '#1DA1F2' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: <LinkedIn />, color: '#0077B5' },
  ]

  const features = [
    { icon: <Security />, label: 'Secure Data', color: 'success' },
    { icon: <Speed />, label: 'Real-time', color: 'primary' },
    { icon: <TrendingUp />, label: 'Live Updates', color: 'warning' },
  ]

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'border.main',
        py: { xs: 4, md: 6 },
        mt: 'auto',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Three.js Background */}
      <FooterBackground />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Fade in={visible} timeout={800}>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  {/* Spectacular Custom SVG Tornado Icon */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #10b981, #8b5a2b)',
                      boxShadow: '0 3px 15px rgba(16, 185, 129, 0.3)',
                      animation: 'footerPulse 3s ease-in-out infinite alternate',
                      '@keyframes footerPulse': {
                        '0%': { 
                          boxShadow: '0 3px 15px rgba(16, 185, 129, 0.3), 0 0 0 0 rgba(16, 185, 129, 0.6)',
                          transform: 'scale(1)',
                        },
                        '100%': { 
                          boxShadow: '0 3px 15px rgba(16, 185, 129, 0.4), 0 0 0 6px rgba(16, 185, 129, 0)',
                          transform: 'scale(1.03)',
                        },
                      },
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.3))',
                      }}
                    >
                      {/* Tornado Funnel - Main Body */}
                      <path
                        d="M12 2C12 2 8 6 8 10C8 12 10 14 12 16C14 14 16 12 16 10C16 6 12 2Z"
                        fill="url(#footerTornadoGradient)"
                        opacity="0.9"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="0 12 12;360 12 12"
                          dur="8s"
                          repeatCount="indefinite"
                        />
                      </path>
                      
                      {/* Inner Tornado Core */}
                      <path
                        d="M12 4C12 4 10 6 10 9C10 10.5 11 12 12 13C13 12 14 10.5 14 9C14 6 12 4Z"
                        fill="url(#footerCoreGradient)"
                        opacity="0.8"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="360 12 12;0 12 12"
                          dur="6s"
                          repeatCount="indefinite"
                        />
                      </path>
                      
                      {/* Debris Particles */}
                      <circle cx="10" cy="7" r="0.8" fill="#8b5a2b" opacity="0.7">
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="0 12 12;360 12 12"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx="14" cy="9" r="0.6" fill="#404040" opacity="0.6">
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="360 12 12;0 12 12"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx="11" cy="11" r="0.7" fill="#8b5a2b" opacity="0.8">
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="0 12 12;360 12 12"
                          dur="5s"
                          repeatCount="indefinite"
                        />
                      </circle>
                      
                      {/* Lightning Effect */}
                      <path
                        d="M13 3L12.5 6L14 7L13 9L14.5 10L13 12"
                        stroke="#f59e0b"
                        strokeWidth="0.5"
                        fill="none"
                        opacity="0"
                      >
                        <animate
                          attributeName="opacity"
                          values="0;1;0"
                          dur="2s"
                          repeatCount="indefinite"
                          begin="0s"
                        />
                        <animate
                          attributeName="stroke-width"
                          values="0.5;1;0.5"
                          dur="2s"
                          repeatCount="indefinite"
                          begin="0s"
                        />
                      </path>
                      
                      {/* Wind Lines */}
                      <path
                        d="M6 8L8 8M6 10L9 10M6 12L7 12"
                        stroke="#10b981"
                        strokeWidth="0.3"
                        opacity="0.6"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.6;1;0.6"
                          dur="1.5s"
                          repeatCount="indefinite"
                        />
                      </path>
                      <path
                        d="M16 8L18 8M16 10L19 10M16 12L17 12"
                        stroke="#10b981"
                        strokeWidth="0.3"
                        opacity="0.6"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.6;1;0.6"
                          dur="1.5s"
                          repeatCount="indefinite"
                          begin="0.5s"
                        />
                      </path>
                      
                      {/* Gradients */}
                      <defs>
                        <linearGradient id="footerTornadoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#10b981" />
                          <stop offset="50%" stopColor="#34d399" />
                          <stop offset="100%" stopColor="#8b5a2b" />
                          <animateTransform
                            attributeName="gradientTransform"
                            type="rotate"
                            values="0 12 12;360 12 12"
                            dur="10s"
                            repeatCount="indefinite"
                          />
                        </linearGradient>
                        
                        <linearGradient id="footerCoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#404040" />
                          <stop offset="50%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#2d2d2d" />
                          <animateTransform
                            attributeName="gradientTransform"
                            type="rotate"
                            values="360 12 12;0 12 12"
                            dur="8s"
                            repeatCount="indefinite"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </Box>
                  
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                    background: 'linear-gradient(45deg, #10b981, #8b5a2b)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    }}
                  >
                    CycloneBB
                  </Typography>
                </Box>
                
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3, lineHeight: 1.6 }}
                >
                  Advanced tornado tracking and severe weather alerts powered by 
                  National Weather Service data. Stay informed, stay safe.
                </Typography>

                {/* Feature Chips */}
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {features.map((feature, index) => (
                    <Chip
                      key={feature.label}
                      icon={feature.icon}
                      label={feature.label}
                      size="small"
                      color={feature.color}
                      variant="outlined"
                      sx={{
                        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                        '@keyframes fadeInUp': {
                          '0%': { opacity: 0, transform: 'translateY(20px)' },
                          '100%': { opacity: 1, transform: 'translateY(0)' },
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Fade>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Fade in={visible} timeout={1000}>
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Quick Links
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {quickLinks.map((link, index) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target={link.external ? '_blank' : '_self'}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: 'text.secondary',
                        textDecoration: 'none',
                        py: 0.5,
                        px: 1,
                        borderRadius: 1,
                        transition: 'all 0.3s ease-in-out',
                        animation: `slideInLeft 0.5s ease-out ${index * 0.1}s both`,
                        '@keyframes slideInLeft': {
                          '0%': { opacity: 0, transform: 'translateX(-20px)' },
                          '100%': { opacity: 1, transform: 'translateX(0)' },
                        },
                        '&:hover': {
                          color: 'primary.main',
                          backgroundColor: 'rgba(16, 185, 129, 0.1)',
                          transform: 'translateX(5px)',
                        },
                      }}
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                  ))}
                </Box>
              </Box>
            </Fade>
          </Grid>

          {/* Social & Info */}
          <Grid item xs={12} sm={6} md={4}>
            <Fade in={visible} timeout={1200}>
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Connect
                </Typography>
                
                {/* Social Links */}
                <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                  {socialLinks.map((social, index) => (
                    <IconButton
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: social.color,
                        transition: 'all 0.3s ease-in-out',
                        animation: `bounceIn 0.6s ease-out ${index * 0.1}s both`,
                        '@keyframes bounceIn': {
                          '0%': { opacity: 0, transform: 'scale(0.3)' },
                          '50%': { transform: 'scale(1.1)' },
                          '100%': { opacity: 1, transform: 'scale(1)' },
                        },
                        '&:hover': {
                          transform: 'scale(1.2) rotate(5deg)',
                          boxShadow: `0 4px 12px ${social.color}40`,
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Box>

                {/* Weather Status */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Current Status
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        backgroundColor: 'success.main',
                        borderRadius: '50%',
                        animation: 'pulse 2s infinite',
                        '@keyframes pulse': {
                          '0%': { opacity: 1 },
                          '50%': { opacity: 0.5 },
                          '100%': { opacity: 1 },
                        },
                      }}
                    />
                    <Typography variant="body2" color="success.main" fontWeight={600}>
                      All Systems Operational
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Fade>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Slide direction="up" in={visible} timeout={1400}>
          <Box
            sx={{
              mt: 4,
              pt: 3,
              borderTop: '1px solid',
              borderColor: 'border.main',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: { xs: 'center', sm: 'left' } }}
            >
              © 2025 CycloneBB. Experimental weather data — not official guidance.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Link
                href="https://www.weather.gov/disclaimer"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.secondary',
                  textDecoration: 'none',
                  fontSize: '0.75rem',
                  '&:hover': {
                    color: 'primary.main',
                    textDecoration: 'underline',
                  },
                }}
              >
                NWS Disclaimer
              </Link>
              <Typography variant="body2" color="text.secondary">
                •
              </Typography>
              <Link
                href="/about"
                sx={{
                  color: 'text.secondary',
                  textDecoration: 'none',
                  fontSize: '0.75rem',
                  '&:hover': {
                    color: 'primary.main',
                    textDecoration: 'underline',
                  },
                }}
              >
                Privacy Policy
              </Link>
            </Box>
          </Box>
        </Slide>
      </Container>
    </Box>
  )
}
