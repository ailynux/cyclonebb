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
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <Box
                    sx={{
                      animation: 'rotate 4s linear infinite',
                      '@keyframes rotate': {
                        '0%': { transform: 'rotate(0deg)' },
                        '100%': { transform: 'rotate(360deg)' },
                      },
                    }}
                  >
                    🌪️
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
