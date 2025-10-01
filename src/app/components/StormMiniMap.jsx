import { Card, CardContent, Box, Typography, Button, SvgIcon } from '@mui/material'
import { Map as MapIcon } from '@mui/icons-material'

export const StormMiniMap = ({ area, alerts = [] }) => {
  // Simple SVG storm spiral for visual placeholder
  const StormSpiral = () => (
    <SvgIcon sx={{ width: 120, height: 120, opacity: 0.3 }}>
      <svg viewBox="0 0 200 200" fill="none">
        <path
          d="M100 100 Q150 100 140 150 Q100 180 60 150 Q20 120 60 80 Q100 40 140 80 Q180 100 160 140 Q120 160 80 140 Q40 120 100 100"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
        />
        <circle cx="100" cy="100" r="3" fill="currentColor" />
        <circle cx="140" cy="80" r="2" fill="currentColor" />
        <circle cx="60" cy="150" r="2" fill="currentColor" />
      </svg>
    </SvgIcon>
  )

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <MapIcon color="primary" />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Storm Map
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            minHeight: 300,
            position: 'relative',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            borderRadius: 2,
            border: '1px dashed',
            borderColor: 'border.main',
          }}
        >
          <StormSpiral />
          
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
              Interactive storm tracking
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Area: <strong>{area}</strong>
            </Typography>
            
            {alerts.length > 0 && (
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="warning.main">
                  {alerts.length} active alert{alerts.length > 1 ? 's' : ''} in area
                </Typography>
              </Box>
            )}
          </Box>

          <Button
            variant="outlined"
            disabled
            sx={{
              mt: 2,
              opacity: 0.6,
            }}
          >
            Open Map (Coming Soon)
          </Button>
        </Box>

        <Box sx={{ mt: 3, p: 2, backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: 2 }}>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
            <strong>Features Coming Soon:</strong>
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
            • Real-time radar overlays
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
            • Storm path predictions
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
            • Interactive zoom & pan
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
            • Historical storm tracks
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
