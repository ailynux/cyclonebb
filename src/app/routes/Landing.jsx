import { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { 
  Radar, 
  Map, 
  History, 
  TrendingUp,
  Security,
  Speed
} from '@mui/icons-material'

export const Landing = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: <Radar sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Real-time Alerts',
      description: 'Live tornado warnings and watches from the National Weather Service, updated continuously.'
    },
    {
      icon: <Map sx={{ fontSize: 40, color: 'secondary.main' }} />,
      title: 'Interactive Map',
      description: 'Visual storm tracking with radar overlays and path predictions for better situational awareness.'
    },
    {
      icon: <History sx={{ fontSize: 40, color: 'warning.main' }} />,
      title: 'Historic Replays',
      description: 'Review past storm events and understand patterns with our historical data archive.'
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
          background: 'linear-gradient(135deg, #0b0f18 0%, #111827 50%, #0b0f18 100%)',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Background Decoration */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 20%, rgba(0, 216, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(167, 139, 250, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(245, 158, 11, 0.05) 0%, transparent 50%)
            `,
            zIndex: 0,
          }}
        />
        
        {/* Storm SVG Decoration */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            opacity: 0.1,
            zIndex: 0,
          }}
        >
          <svg width="200" height="200" viewBox="0 0 200 200">
            <path
              d="M100 20 Q150 50 120 100 Q180 120 140 160 Q100 180 80 140 Q40 120 60 80 Q20 60 100 20 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          </svg>
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                background: 'linear-gradient(45deg, #00d8ff, #a78bfa)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
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
                background: 'linear-gradient(45deg, #00d8ff, #a78bfa)',
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

            {/* Stats */}
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
                  }}
                >
                  {stat.icon}
                  <Typography variant="body2">
                    {stat.label}: <strong>{stat.value}</strong>
                  </Typography>
                </Box>
              ))}
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
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {feature.description}
                  </Typography>
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
                background: 'linear-gradient(45deg, #00d8ff, #a78bfa)',
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
    </Box>
  )
}
