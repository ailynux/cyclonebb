import { Container, Typography, Box, Paper, Link, Grid, Card, CardContent } from '@mui/material'
import { GitHub, Public, Security, Code } from '@mui/icons-material'

export const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
          About CycloneBB
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          A modern web application for tracking tornado alerts and storm paths using real-time 
          National Weather Service data.
        </Typography>
      </Box>

      {/* Main Content */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 4, mb: 4 }}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
              Project Purpose
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
              CycloneBB was created to provide a clean, modern interface for accessing tornado 
              alerts and storm tracking information. Our goal is to make critical weather 
              information more accessible and easier to understand for everyone.
            </Typography>
            
            <Typography variant="h5" sx={{ mb: 2, mt: 4, fontWeight: 600 }}>
              Data Sources
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
              All weather data is sourced from the National Weather Service (NWS) through their 
              official API. This includes tornado warnings, watches, severe thunderstorm alerts, 
              and other critical weather information.
            </Typography>

            <Typography variant="h5" sx={{ mb: 2, mt: 4, fontWeight: 600 }}>
              Technology Stack
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
              Built with React, Material-UI, and Vite for a fast, responsive experience. 
              Uses React Query for efficient data fetching and caching. The app is designed 
              with accessibility and mobile-first principles.
            </Typography>

            <Typography variant="h5" sx={{ mb: 2, mt: 4, fontWeight: 600 }}>
              Disclaimer
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7, color: 'warning.main' }}>
              This application is for informational purposes only and should not be used as 
              the sole source for weather emergency decisions. Always follow official guidance 
              from local emergency management and the National Weather Service.
            </Typography>
          </Paper>

          {/* License & Contributing */}
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
              Open Source
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
              CycloneBB is open source and available on GitHub. We welcome contributions, 
              bug reports, and feature requests from the community.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textDecoration: 'none' }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    p: 2,
                    border: '1px solid',
                    borderColor: 'border.main',
                    borderRadius: 2,
                    backgroundColor: 'background.paper',
                    '&:hover': {
                      backgroundColor: 'action.hover',
                      borderColor: 'primary.main',
                    },
                    transition: 'all 0.2s ease-in-out',
                  }}
                >
                  <GitHub />
                  <Typography variant="body2" fontWeight={600}>
                    View on GitHub
                  </Typography>
                </Box>
              </Link>

              <Link
                href="https://www.weather.gov"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textDecoration: 'none' }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    p: 2,
                    border: '1px solid',
                    borderColor: 'border.main',
                    borderRadius: 2,
                    backgroundColor: 'background.paper',
                    '&:hover': {
                      backgroundColor: 'action.hover',
                      borderColor: 'primary.main',
                    },
                    transition: 'all 0.2s ease-in-out',
                  }}
                >
                  <Public />
                  <Typography variant="body2" fontWeight={600}>
                    National Weather Service
                  </Typography>
                </Box>
              </Link>
            </Box>
          </Paper>
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Security color="primary" />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Data Security
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                All data is fetched directly from official NWS APIs. No personal information 
                is collected or stored.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Code color="primary" />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Version Info
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                <strong>Version:</strong> 1.0.0-beta<br />
                <strong>Last Updated:</strong> January 2025<br />
                <strong>API Status:</strong> Mock Data (Development)
              </Typography>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link href="/home" color="primary" sx={{ textDecoration: 'none' }}>
                  → Dashboard
                </Link>
                <Link href="https://www.weather.gov/alerts" target="_blank" rel="noopener noreferrer" color="primary" sx={{ textDecoration: 'none' }}>
                  → NWS Alerts
                </Link>
                <Link href="https://www.weather.gov/safety/tornado" target="_blank" rel="noopener noreferrer" color="primary" sx={{ textDecoration: 'none' }}>
                  → Tornado Safety
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}
