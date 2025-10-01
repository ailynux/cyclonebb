import { useState, useEffect } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Chip,
  Fade,
  Slide,
} from '@mui/material'
import { 
  Menu as MenuIcon, 
  GitHub, 
  Home, 
  Info, 
  Dashboard,
  TrendingUp,
  Security
} from '@mui/icons-material'
import { useNavigate, useLocation } from 'react-router-dom'
import HeaderBackground from './HeaderBackground'

export const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'))
  const [anchorEl, setAnchorEl] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleNavigation = (path) => {
    navigate(path)
    handleMenuClose()
  }

  const navItems = [
    { 
      label: 'Dashboard', 
      path: '/home', 
      icon: <Dashboard />,
      description: 'Live weather alerts'
    },
    { 
      label: 'About', 
      path: '/about', 
      icon: <Info />,
      description: 'Project info'
    },
  ]

  const statusItems = [
    { icon: <Security />, label: 'Secure', color: 'success' },
    { icon: <TrendingUp />, label: 'Live', color: 'primary' },
  ]

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{
        backgroundColor: scrolled ? 'rgba(26, 26, 26, 0.95)' : 'rgba(26, 26, 26, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid',
        borderColor: 'border.main',
        transition: 'all 0.3s ease-in-out',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Three.js Background */}
      <HeaderBackground />
      
      <Toolbar sx={{ position: 'relative', zIndex: 2 }}>
        {/* Spectacular Advanced Logo */}
        <Slide direction="right" in={true} timeout={800}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              mr: { xs: 3, md: 6 },
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                transform: 'scale(1.08) translateY(-2px)',
                filter: 'drop-shadow(0 8px 25px rgba(16, 185, 129, 0.4))',
              },
            }}
            onClick={() => navigate('/')}
          >
            {/* Spectacular Custom SVG Tornado Icon */}
            <Box
              sx={{
                position: 'relative',
                mr: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: { xs: 40, md: 48 },
                height: { xs: 40, md: 48 },
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #10b981, #8b5a2b)',
                boxShadow: '0 4px 20px rgba(16, 185, 129, 0.3)',
                animation: 'pulseGlow 2s ease-in-out infinite alternate',
                '@keyframes pulseGlow': {
                  '0%': { 
                    boxShadow: '0 4px 20px rgba(16, 185, 129, 0.3), 0 0 0 0 rgba(16, 185, 129, 0.7)',
                    transform: 'scale(1)',
                  },
                  '100%': { 
                    boxShadow: '0 4px 20px rgba(16, 185, 129, 0.5), 0 0 0 8px rgba(16, 185, 129, 0)',
                    transform: 'scale(1.05)',
                  },
                },
                '&:hover': {
                  animation: 'none',
                  transform: 'scale(1.1)',
                  boxShadow: '0 6px 25px rgba(16, 185, 129, 0.6), 0 0 0 12px rgba(16, 185, 129, 0.1)',
                },
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
                }}
              >
                {/* Tornado Funnel - Main Body */}
                <path
                  d="M12 2C12 2 8 6 8 10C8 12 10 14 12 16C14 14 16 12 16 10C16 6 12 2Z"
                  fill="url(#tornadoGradient)"
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
                  fill="url(#coreGradient)"
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
                  <linearGradient id="tornadoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
                  
                  <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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

            {/* Advanced Typography */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography
                variant={isMobile ? "h5" : "h4"}
                component="div"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  lineHeight: 0.9,
                  letterSpacing: '-0.02em',
                  background: 'linear-gradient(135deg, #10b981 0%, #34d399 50%, #8b5a2b 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                  animation: 'textShimmer 3s ease-in-out infinite',
                  '@keyframes textShimmer': {
                    '0%, 100%': { 
                      backgroundPosition: '0% 50%',
                      filter: 'brightness(1)',
                    },
                    '50%': { 
                      backgroundPosition: '100% 50%',
                      filter: 'brightness(1.2)',
                    },
                  },
                }}
              >
                CYCLONE
              </Typography>
              
              <Typography
                variant={isMobile ? "h4" : "h3"}
                component="div"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: '1.8rem', md: '2.5rem' },
                  lineHeight: 0.8,
                  letterSpacing: '-0.03em',
                  color: '#8b5a2b',
                  textShadow: '0 3px 6px rgba(139, 90, 43, 0.4), 0 0 20px rgba(139, 90, 43, 0.3)',
                  animation: 'bounceText 2s ease-in-out infinite',
                  '@keyframes bounceText': {
                    '0%, 100%': { transform: 'translateY(0) scale(1)' },
                    '50%': { transform: 'translateY(-2px) scale(1.02)' },
                  },
                }}
              >
                BB
              </Typography>
            </Box>

            {/* Subtitle */}
            <Box
              sx={{
                ml: 2,
                display: { xs: 'none', md: 'block' },
                opacity: 0.7,
                animation: 'fadeInDelay 1.5s ease-in-out',
                '@keyframes fadeInDelay': {
                  '0%': { opacity: 0, transform: 'translateX(-10px)' },
                  '100%': { opacity: 0.7, transform: 'translateX(0)' },
                },
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: 'text.secondary',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  background: 'linear-gradient(90deg, #10b981, #8b5a2b)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                WEATHER TRACKING
              </Typography>
            </Box>
          </Box>
        </Slide>

        {/* Advanced Status Indicators */}
        {!isMobile && (
          <Fade in={true} timeout={1200}>
            <Box sx={{ display: 'flex', gap: 1.5, mr: 3 }}>
              {statusItems.map((item, index) => (
                <Chip
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  size="small"
                  color={item.color}
                  variant="filled"
                  sx={{
                    fontSize: '0.75rem',
                    height: 28,
                    fontWeight: 600,
                    px: 1,
                    background: `linear-gradient(135deg, ${item.color === 'primary' ? '#10b981' : '#22c55e'}, ${item.color === 'primary' ? '#059669' : '#16a34a'})`,
                    color: 'white',
                    border: 'none',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                    '@keyframes fadeInUp': {
                      '0%': { opacity: 0, transform: 'translateY(20px)' },
                      '100%': { opacity: 1, transform: 'translateY(0)' },
                    },
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                />
              ))}
            </Box>
          </Fade>
        )}

        {/* Advanced Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ flexGrow: 1, display: 'flex', gap: 2, justifyContent: 'center' }}>
            {navItems.map((item, index) => (
              <Fade in={true} timeout={1000 + index * 200} key={item.path}>
                <Button
                  variant={location.pathname === item.path ? "contained" : "text"}
                  startIcon={item.icon}
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    borderRadius: 3,
                    px: 3,
                    py: 1.5,
                    minWidth: 140,
                    textTransform: 'none',
                    letterSpacing: '0.02em',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    background: location.pathname === item.path 
                      ? 'linear-gradient(135deg, #10b981, #8b5a2b)' 
                      : 'transparent',
                    color: location.pathname === item.path ? 'white' : 'text.primary',
                    border: location.pathname === item.path 
                      ? 'none' 
                      : '2px solid transparent',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                      transition: 'left 0.5s ease-in-out',
                    },
                    '&:hover': {
                      background: location.pathname === item.path
                        ? 'linear-gradient(135deg, #059669, #6d4422)'
                        : 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(139, 90, 43, 0.1))',
                      transform: 'translateY(-3px) scale(1.02)',
                      boxShadow: location.pathname === item.path
                        ? '0 8px 25px rgba(16, 185, 129, 0.4)'
                        : '0 6px 20px rgba(16, 185, 129, 0.2)',
                      border: '2px solid rgba(16, 185, 129, 0.3)',
                      '&::before': {
                        left: '100%',
                      },
                    },
                    '&:active': {
                      transform: 'translateY(-1px) scale(0.98)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              </Fade>
            ))}
          </Box>
        )}

        {/* Advanced Right Side Actions */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Enhanced GitHub Link */}
          <Fade in={true} timeout={1400}>
            <IconButton
              color="inherit"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                opacity: 0.9,
                width: 44,
                height: 44,
                borderRadius: 2,
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(139, 90, 43, 0.1))',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  opacity: 1,
                  transform: 'scale(1.1) rotate(5deg) translateY(-2px)',
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(139, 90, 43, 0.2))',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  boxShadow: '0 6px 20px rgba(16, 185, 129, 0.3)',
                  color: '#10b981',
                },
              }}
            >
              <GitHub sx={{ fontSize: '1.2rem' }} />
            </IconButton>
          </Fade>

          {/* Enhanced Mobile Menu */}
          {isMobile && (
            <Fade in={true} timeout={1600}>
              <IconButton
                color="inherit"
                onClick={handleMenuOpen}
                sx={{
                  opacity: 0.9,
                  width: 44,
                  height: 44,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(139, 90, 43, 0.1))',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    opacity: 1,
                    transform: 'rotate(90deg) scale(1.1)',
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(139, 90, 43, 0.2))',
                    border: '1px solid rgba(16, 185, 129, 0.4)',
                    boxShadow: '0 6px 20px rgba(16, 185, 129, 0.3)',
                    color: '#10b981',
                  },
                }}
              >
                <MenuIcon sx={{ fontSize: '1.2rem' }} />
              </IconButton>
            </Fade>
          )}
        </Box>
      </Toolbar>

      {/* Enhanced Mobile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(26, 26, 26, 0.95)',
            border: '1px solid',
            borderColor: 'rgba(16, 185, 129, 0.3)',
            mt: 2,
            borderRadius: 4,
            minWidth: 250,
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(16, 185, 129, 0.1)',
            backdropFilter: 'blur(25px)',
            overflow: 'hidden',
          },
        }}
      >
        {navItems.map((item, index) => (
          <MenuItem
            key={item.path}
            onClick={() => handleNavigation(item.path)}
            selected={location.pathname === item.path}
            sx={{
              py: 2.5,
              px: 4,
              color: 'text.primary',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              animation: `slideInRight 0.4s ease-out ${index * 0.1}s both`,
              '@keyframes slideInRight': {
                '0%': { opacity: 0, transform: 'translateX(30px) scale(0.95)' },
                '100%': { opacity: 1, transform: 'translateX(0) scale(1)' },
              },
              '&.Mui-selected': {
                background: 'linear-gradient(135deg, #10b981, #8b5a2b)',
                color: 'white',
                '&:hover': {
                  background: 'linear-gradient(135deg, #059669, #6d4422)',
                },
              },
              '&:hover': {
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                transform: 'translateX(8px) scale(1.02)',
                boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
              {item.icon}
              <Box>
                <Typography variant="body1" fontWeight={600}>
                  {item.label}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {item.description}
                </Typography>
              </Box>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  )
}
