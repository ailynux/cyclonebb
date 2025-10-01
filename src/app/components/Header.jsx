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
        {/* Enhanced Logo */}
        <Slide direction="right" in={true} timeout={800}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              mr: { xs: 2, md: 4 },
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
            onClick={() => navigate('/')}
          >
            <Typography
              variant={isMobile ? "h6" : "h5"}
              component="div"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(45deg, #10b981, #8b5a2b)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                textShadow: '0 0 20px rgba(0, 216, 255, 0.3)',
              }}
            >
              <Box
                sx={{
                  animation: 'rotate 3s linear infinite',
                  '@keyframes rotate': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                  },
                }}
              >
                🌪️
              </Box>
              Cyclone<span style={{ color: '#8b5a2b' }}>BB</span>
            </Typography>
          </Box>
        </Slide>

        {/* Status Indicators */}
        {!isMobile && (
          <Fade in={true} timeout={1200}>
            <Box sx={{ display: 'flex', gap: 1, mr: 2 }}>
              {statusItems.map((item, index) => (
                <Chip
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  size="small"
                  color={item.color}
                  variant="outlined"
                  sx={{
                    fontSize: '0.75rem',
                    height: 24,
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                    '@keyframes fadeInUp': {
                      '0%': { opacity: 0, transform: 'translateY(20px)' },
                      '100%': { opacity: 1, transform: 'translateY(0)' },
                    },
                  }}
                />
              ))}
            </Box>
          </Fade>
        )}

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ flexGrow: 1, display: 'flex', gap: 1 }}>
            {navItems.map((item, index) => (
              <Fade in={true} timeout={1000 + index * 200} key={item.path}>
                <Button
                  variant={location.pathname === item.path ? "contained" : "text"}
                  startIcon={item.icon}
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    fontWeight: 600,
                    borderRadius: 2,
                    px: 2,
                    py: 1,
                    minWidth: 120,
                    transition: 'all 0.3s ease-in-out',
                    background: location.pathname === item.path 
                      ? 'linear-gradient(45deg, #10b981, #8b5a2b)' 
                      : 'transparent',
                    color: location.pathname === item.path ? 'white' : 'text.primary',
                    '&:hover': {
                      background: location.pathname === item.path
                        ? 'linear-gradient(45deg, #059669, #6d4422)'
                        : 'rgba(16, 185, 129, 0.1)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              </Fade>
            ))}
          </Box>
        )}

        {/* Right Side Actions */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* GitHub Link */}
          <Fade in={true} timeout={1400}>
            <IconButton
              color="inherit"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                opacity: 0.8,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  opacity: 1,
                  transform: 'scale(1.1) rotate(5deg)',
                  color: '#10b981',
                },
              }}
            >
              <GitHub />
            </IconButton>
          </Fade>

          {/* Mobile Menu */}
          {isMobile && (
            <Fade in={true} timeout={1600}>
              <IconButton
                color="inherit"
                onClick={handleMenuOpen}
                sx={{
                  opacity: 0.8,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    opacity: 1,
                    transform: 'rotate(90deg)',
                  },
                }}
              >
                <MenuIcon />
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
            backgroundColor: 'background.paper',
            border: '1px solid',
            borderColor: 'border.main',
            mt: 1,
            borderRadius: 3,
            minWidth: 200,
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
          },
        }}
      >
        {navItems.map((item, index) => (
          <MenuItem
            key={item.path}
            onClick={() => handleNavigation(item.path)}
            selected={location.pathname === item.path}
            sx={{
              py: 2,
              px: 3,
              color: 'text.primary',
              transition: 'all 0.3s ease-in-out',
              animation: `slideInRight 0.3s ease-out ${index * 0.1}s both`,
              '@keyframes slideInRight': {
                '0%': { opacity: 0, transform: 'translateX(20px)' },
                '100%': { opacity: 1, transform: 'translateX(0)' },
              },
              '&.Mui-selected': {
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              },
              '&:hover': {
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                transform: 'translateX(5px)',
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
