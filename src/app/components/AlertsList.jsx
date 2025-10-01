import { Box, Typography, Skeleton, Alert, Button } from '@mui/material'
import { AlertCard } from './AlertCard'
import { EmptyState } from './EmptyState'

export const AlertsList = ({ alerts, isLoading, error, onRetry, area }) => {
  if (isLoading) {
    return (
      <Box>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
          Active Alerts
        </Typography>
        {[1, 2, 3].map((i) => (
          <Box key={i} sx={{ mb: 2 }}>
            <Skeleton variant="rectangular" height={120} sx={{ borderRadius: 2 }} />
          </Box>
        ))}
      </Box>
    )
  }

  if (error) {
    return (
      <Box>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
          Active Alerts
        </Typography>
        <Alert 
          severity="error" 
          action={
            <Button color="inherit" size="small" onClick={onRetry}>
              Retry
            </Button>
          }
        >
          Failed to load alerts: {error.message}
        </Alert>
      </Box>
    )
  }

  if (!alerts || alerts.length === 0) {
    return (
      <Box>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
          Active Alerts
        </Typography>
        <EmptyState
          icon="🟢"
          title="All Clear"
          message={`No active weather alerts for ${area || 'your area'}. Stay weather aware!`}
        />
      </Box>
    )
  }

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
        Active Alerts ({alerts.length})
      </Typography>
      {alerts.map((alert) => (
        <AlertCard key={alert.id} alert={alert} />
      ))}
    </Box>
  )
}
