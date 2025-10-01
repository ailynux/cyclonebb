import { useState } from 'react'
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
} from '@mui/material'
import { Menu as MenuIcon, GitHub } from '@mui/icons-material'
import { useNavigate, useLocation } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [anchorEl, setAnchorEl] = useState(null)

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
    { label: 'Home', path: '/home' },
    { label: 'About', path: '/about' },
  ]

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        {/* Logo */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            mr: 4,
          }}
          onClick={() => navigate('/')}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(45deg, #00d8ff, #a78bfa)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            🌪️ Cyclone<span style={{ color: '#a78bfa' }}>BB</span>
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                color="inherit"
                onClick={() => handleNavigation(item.path)}
                sx={{
                  fontWeight: location.pathname === item.path ? 600 : 400,
                  opacity: location.pathname === item.path ? 1 : 0.8,
                  '&:hover': {
                    opacity: 1,
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}

        {/* GitHub Link */}
        <Box sx={{ ml: 'auto' }}>
          <IconButton
            color="inherit"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              opacity: 0.8,
              '&:hover': {
                opacity: 1,
                transform: 'scale(1.1)',
              },
              transition: 'all 0.2s ease-in-out',
            }}
          >
            <GitHub />
          </IconButton>
        </Box>

        {/* Mobile Menu */}
        {isMobile && (
          <Box sx={{ ml: 'auto' }}>
            <IconButton
              color="inherit"
              onClick={handleMenuOpen}
              sx={{
                opacity: 0.8,
                '&:hover': {
                  opacity: 1,
                },
              }}
            >
              <MenuIcon />
            </IconButton>
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
                },
              }}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  selected={location.pathname === item.path}
                  sx={{
                    color: 'text.primary',
                    '&.Mui-selected': {
                      backgroundColor: 'primary.main',
                      color: 'primary.contrastText',
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                      },
                    },
                  }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}
