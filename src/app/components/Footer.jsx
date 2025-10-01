import { Box, Typography, Container, Link } from '@mui/material'

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'border.main',
        py: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
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
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              alignItems: 'center',
            }}
          >
            <Link
              href="https://www.weather.gov"
              target="_blank"
              rel="noopener noreferrer"
              color="text.secondary"
              variant="body2"
              sx={{
                textDecoration: 'none',
                '&:hover': {
                  color: 'primary.main',
                  textDecoration: 'underline',
                },
              }}
            >
              NWS Data
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              color="text.secondary"
              variant="body2"
              sx={{
                textDecoration: 'none',
                '&:hover': {
                  color: 'primary.main',
                  textDecoration: 'underline',
                },
              }}
            >
              GitHub
            </Link>
            <Link
              href="/about"
              color="text.secondary"
              variant="body2"
              sx={{
                textDecoration: 'none',
                '&:hover': {
                  color: 'primary.main',
                  textDecoration: 'underline',
                },
              }}
            >
              About
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
