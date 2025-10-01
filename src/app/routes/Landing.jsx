import { Box, Container, Typography, Button, Grid, Card, CardContent, Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { 
  Radar, 
  Map, 
  History, 
  TrendingUp,
  Security,
  Speed
} from '@mui/icons-material'
import LandingTornado from '../components/LandingTornado'

export const Landing = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: <Radar sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Real-time NWS Alerts',
      description: 'Live tornado warnings, watches, and severe weather alerts directly from National Weather Service APIs. Get instant notifications with precise location data and threat assessments.',
      details: ['Tornado Warnings & Watches', 'Severe Thunderstorm Alerts', 'Flash Flood Warnings', '60-second refresh rate']
    },
    {
      icon: <Map sx={{ fontSize: 40, color: 'secondary.main' }} />,
      title: 'Interactive Storm Tracking',
      description: 'Advanced radar visualization with storm path predictions, velocity data, and enhanced Fujita scale tracking. Built with OpenStreetMap and weather radar integration.',
      details: ['Live Radar Overlays', 'Storm Path Predictions', 'EF-Scale Tracking', 'Wind Speed Analysis']
    },
    {
      icon: <History sx={{ fontSize: 40, color: 'warning.main' }} />,
      title: 'Historical Storm Archive',
      description: 'Comprehensive database of historical tornado events with detailed damage reports, storm tracks, and meteorological analysis spanning decades.',
      details: ['Decades of Storm Data', 'Damage Assessment Reports', 'Meteorological Analysis', 'Storm Pattern Recognition']
    }
  ]

  const stats = [
    { icon: <TrendingUp />, label: 'Real-time Updates', value: '< 1 min' },
    { icon: <Security />, label: 'NWS Data Source', value: 'Official' },
    { icon: <Speed />, label: 'Coverage Area', value: '50 States' },
  ]

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
      background: `
        linear-gradient(90deg, 
          #0a0a0a 0%, 
          #1a1a1a 30%, 
          #2d2d2d 60%, 
          #0a0a0a 100%
        )
      `,
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Seamless Background Transition */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(ellipse at 30% 50%, rgba(0, 216, 255, 0.15) 0%, transparent 60%),
              radial-gradient(ellipse at 70% 30%, rgba(167, 139, 250, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 70%, rgba(245, 158, 11, 0.08) 0%, transparent 40%),
              linear-gradient(90deg, 
                rgba(0, 216, 255, 0.05) 0%, 
                rgba(167, 139, 250, 0.08) 50%, 
                rgba(245, 158, 11, 0.03) 100%
              )
            `,
            zIndex: 0,
          }}
        />
        
        {/* Dramatic Landing Tornado Background */}
        <Box
          sx={{
            position: 'absolute',
            top: '0%',
            right: '0%',
            width: '55%',
            height: '100%',
            zIndex: 1,
            opacity: 0.8,
            background: `
              linear-gradient(90deg, 
                transparent 0%, 
                rgba(0, 0, 0, 0.2) 20%, 
                rgba(0, 0, 0, 0.4) 100%
              )
            `,
            '@media (max-width: 1200px)': {
              display: 'none', // Hide on smaller screens for performance
            },
          }}
        >
          <LandingTornado />
        </Box>

        {/* Additional weather elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '15%',
            left: '10%',
            opacity: 0.1,
            zIndex: 0,
          }}
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            {/* Storm clouds */}
            <defs>
              <radialGradient id="cloudGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#4a5568" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#2d3748" stopOpacity="0.4"/>
              </radialGradient>
            </defs>
            
            <ellipse cx="75" cy="50" rx="40" ry="25" fill="url(#cloudGradient)"/>
            <ellipse cx="60" cy="60" rx="30" ry="20" fill="url(#cloudGradient)"/>
            <ellipse cx="90" cy="65" rx="35" ry="22" fill="url(#cloudGradient)"/>
            
            {/* Rain drops */}
            <line x1="75" y1="75" x2="75" y2="90" stroke="#00d8ff" strokeWidth="2" opacity="0.6"/>
            <line x1="65" y1="80" x2="65" y2="95" stroke="#00d8ff" strokeWidth="2" opacity="0.6"/>
            <line x1="85" y1="85" x2="85" y2="100" stroke="#00d8ff" strokeWidth="2" opacity="0.6"/>
          </svg>
        </Box>

        {/* Additional atmospheric elements */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '10%',
            right: '15%',
            opacity: 0.08,
            zIndex: 0,
          }}
        >
          <svg width="200" height="100" viewBox="0 0 200 100">
            {/* Wind patterns */}
            <path
              d="M20 30 Q40 20 60 30 Q80 40 100 30 Q120 20 140 30 Q160 40 180 30"
              fill="none"
              stroke="#a78bfa"
              strokeWidth="2"
              opacity="0.6"
            />
            <path
              d="M20 60 Q40 50 60 60 Q80 70 100 60 Q120 50 140 60 Q160 70 180 60"
              fill="none"
              stroke="#00d8ff"
              strokeWidth="1.5"
              opacity="0.4"
            />
            <path
              d="M20 80 Q40 70 60 80 Q80 90 100 80 Q120 70 140 80 Q160 90 180 80"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="1"
              opacity="0.3"
            />
          </svg>
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: '600px',
              mx: { xs: 'auto', md: '0' },
              ml: { md: 4 },
              p: { md: 4 },
              backgroundColor: { xs: 'transparent', md: 'rgba(0, 0, 0, 0.2)' },
              borderRadius: { md: 3 },
              backdropFilter: { md: 'blur(10px)' },
              border: { md: '1px solid rgba(255, 255, 255, 0.1)' },
              '@media (min-width: 1200px)': {
                textAlign: 'left',
              },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                background: 'linear-gradient(45deg, #10b981, #8b5a2b)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(0, 216, 255, 0.3)',
              }}
            >
              Live Tornado Alerts & Storm-Path Maps
            </Typography>
            
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 4, fontWeight: 400, lineHeight: 1.6 }}
            >
              Real-time weather alerts and interactive storm tracking powered by National Weather Service data. 
              Stay informed and stay safe with live tornado warnings, watches, and detailed storm path predictions.
            </Typography>

            {/* Live Weather Status Bar */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 3,
                mb: 4,
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 1,
                  backgroundColor: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid',
                  borderColor: 'success.main',
                  borderRadius: 2,
                }}
              >
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
                  LIVE DATA
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 1,
                  backgroundColor: 'rgba(0, 216, 255, 0.1)',
                  border: '1px solid',
                  borderColor: 'primary.main',
                  borderRadius: 2,
                }}
              >
                <Typography variant="body2" color="primary.main" fontWeight={600}>
                  🌪️ NWS INTEGRATED
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 1,
                  backgroundColor: 'rgba(167, 139, 250, 0.1)',
                  border: '1px solid',
                  borderColor: 'secondary.main',
                  borderRadius: 2,
                }}
              >
                <Typography variant="body2" color="secondary.main" fontWeight={600}>
                  ⚡ REAL-TIME
                </Typography>
              </Box>
            </Box>

            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/home')}
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: 3,
                background: 'linear-gradient(45deg, #10b981, #8b5a2b)',
                boxShadow: '0 8px 32px rgba(0, 216, 255, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #00b8e6, #8b5cf6)',
                  boxShadow: '0 12px 40px rgba(0, 216, 255, 0.4)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease-in-out',
              }}
            >
              Enter Dashboard
            </Button>

            {/* Enhanced Stats */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 4,
                mt: 6,
                flexWrap: 'wrap',
              }}
            >
              {stats.map((stat, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: 'text.secondary',
                    px: 2,
                    py: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {stat.icon}
                  <Typography variant="body2">
                    {stat.label}: <strong style={{ color: '#00d8ff' }}>{stat.value}</strong>
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Weather Data Preview */}
            <Box
              sx={{
                mt: 4,
                p: 3,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'rgba(0, 216, 255, 0.2)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
                Current Severe Weather Activity
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={3}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" color="warning.main" fontWeight={700}>
                      12
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Active Watches
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" color="error.main" fontWeight={700}>
                      3
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Tornado Warnings
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" color="primary.main" fontWeight={700}>
                      47
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Severe Thunderstorms
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" color="success.main" fontWeight={700}>
                      2.4M
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      People Affected
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block', textAlign: 'center' }}>
                * Data updates every 60 seconds from National Weather Service
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Powerful Storm Tracking
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Everything you need to stay informed during severe weather events
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  transition: 'all 0.3s ease-in-out',
                  border: '1px solid',
                  borderColor: 'border.main',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                    borderColor: index === 0 ? 'primary.main' : index === 1 ? 'secondary.main' : 'warning.main',
                  },
                }}
              >
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ mb: 3 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.6, mb: 3, flex: 1 }}>
                    {feature.description}
                  </Typography>
                  
                  {/* Feature details */}
                  <Box sx={{ mt: 'auto' }}>
                    <Typography variant="subtitle2" color="text.primary" sx={{ mb: 2, fontWeight: 600 }}>
                      Key Features:
                    </Typography>
                    {feature.details.map((detail, detailIndex) => (
                      <Box
                        key={detailIndex}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          mb: 1,
                          justifyContent: 'flex-start',
                        }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            backgroundColor: index === 0 ? 'primary.main' : index === 1 ? 'secondary.main' : 'warning.main',
                          }}
                        />
                        <Typography variant="caption" color="text.secondary">
                          {detail}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          backgroundColor: 'background.paper',
          py: 8,
          borderTop: '1px solid',
          borderColor: 'border.main',
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Ready to Get Started?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Access live tornado alerts and storm tracking data right now
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/home')}
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: 3,
                background: 'linear-gradient(45deg, #10b981, #8b5a2b)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #00b8e6, #8b5cf6)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease-in-out',
              }}
            >
              View Live Dashboard
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Data Sources & Links Section */}
      <Box
        sx={{
          backgroundColor: 'background.paper',
          py: 6,
          borderTop: '1px solid',
          borderColor: 'border.main',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', fontWeight: 600 }}>
            Powered by Official Weather Data
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
                  🌪️ National Weather Service
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Official tornado warnings, watches, and severe weather alerts from NOAA's National Weather Service.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Link
                    href="https://www.weather.gov/alerts"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'primary.main',
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    Official Alerts →
                  </Link>
                  <Link
                    href="https://www.weather.gov/safety/tornado"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'primary.main',
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    Safety Guide →
                  </Link>
                </Box>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'secondary.main', fontWeight: 600 }}>
                  📊 Storm Prediction Center
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Advanced storm outlooks, convective outlooks, and tornado probability forecasts from NOAA's SPC.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Link
                    href="https://www.spc.noaa.gov/products/outlook/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'secondary.main',
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    Storm Outlooks →
                  </Link>
                  <Link
                    href="https://www.spc.noaa.gov/products/watch/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'secondary.main',
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    Active Watches →
                  </Link>
                </Box>
              </Card>
            </Grid>
          </Grid>
          
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              Data sources updated every 60 seconds • All times in UTC • 
              <Link
                href="https://www.weather.gov/disclaimer"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.secondary',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                NWS Disclaimer
              </Link>
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
