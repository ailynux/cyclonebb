import { Card, CardContent, Box, Typography, Chip, IconButton, Link } from '@mui/material'
import { OpenInNew, Warning, Watch, Info } from '@mui/icons-material'
import dayjs from 'dayjs'

export const AlertCard = ({ alert }) => {
  const getSeverityIcon = (event, severity) => {
    if (event?.toLowerCase().includes('tornado warning')) {
      return <Warning sx={{ color: 'error.main' }} />
    } else if (event?.toLowerCase().includes('tornado watch')) {
      return <Watch sx={{ color: 'warning.main' }} />
    } else {
      return <Info sx={{ color: 'primary.main' }} />
    }
  }

  const getSeverityColor = (event, severity) => {
    if (event?.toLowerCase().includes('tornado warning')) {
      return 'error'
    } else if (event?.toLowerCase().includes('tornado watch')) {
      return 'warning'
    } else if (severity?.toLowerCase().includes('severe') || severity?.toLowerCase().includes('extreme')) {
      return 'warning'
    } else {
      return 'info'
    }
  }

  const formatTimeWindow = (effective, ends) => {
    const start = dayjs(effective)
    const end = dayjs(ends)
    const now = dayjs()
    
    if (now.isBefore(start)) {
      return `Starts ${start.format('h:mm A')}`
    } else if (now.isAfter(end)) {
      return `Expired ${end.format('h:mm A')}`
    } else {
      return `Until ${end.format('h:mm A')}`
    }
  }

  const severityColor = getSeverityColor(alert.event, alert.severity)
  const severityIcon = getSeverityIcon(alert.event, alert.severity)

  return (
    <Card
      sx={{
        mb: 2,
        border: '1px solid',
        borderColor: severityColor === 'error' ? 'error.main' : 
                     severityColor === 'warning' ? 'warning.main' : 'border.main',
        '&:hover': {
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
          transform: 'translateY(-2px)',
        },
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {severityIcon}
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {alert.event}
            </Typography>
          </Box>
          
          <Chip
            label={alert.severity}
            color={severityColor}
            size="small"
            variant="outlined"
            sx={{ fontWeight: 600 }}
          />
        </Box>

        <Typography variant="body1" sx={{ mb: 2, fontWeight: 500, color: 'text.primary' }}>
          {alert.headline}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              <strong>Area:</strong> {alert.areaDesc}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Time:</strong> {formatTimeWindow(alert.effective, alert.ends)}
            </Typography>
          </Box>
          
          {alert.link && (
            <Link
              href={alert.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: 'none' }}
            >
              <IconButton size="small" color="primary">
                <OpenInNew />
              </IconButton>
            </Link>
          )}
        </Box>

        <Typography variant="caption" color="text.secondary">
          Sent: {dayjs(alert.sent).format('MMM D, YYYY h:mm A')}
        </Typography>
      </CardContent>
    </Card>
  )
}
