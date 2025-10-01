import { Box, Chip, Typography, Tooltip, Fade } from '@mui/material'
import { getRiskIcon, getRiskDescription } from '../lib/risk'

export const RiskBadge = ({ risk, sx = {} }) => {
  const { level, color, label } = risk
  const icon = getRiskIcon(level)
  const description = getRiskDescription(level)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        ...sx,
      }}
    >
      <Tooltip title={description} arrow placement="top">
        <Chip
          icon={<span style={{ fontSize: '1.2rem' }}>{icon}</span>}
          label={label}
          color={color}
          size="large"
          sx={{
            fontSize: '1.1rem',
            fontWeight: 700,
            px: 3,
            py: 1,
            height: 'auto',
            borderRadius: 3,
            boxShadow: level === 'warning' ? '0 0 20px rgba(239, 68, 68, 0.3)' : 'none',
            animation: level === 'warning' ? 'pulse 2s infinite' : 'none',
            '@keyframes pulse': {
              '0%': {
                boxShadow: '0 0 20px rgba(239, 68, 68, 0.3)',
              },
              '50%': {
                boxShadow: '0 0 30px rgba(239, 68, 68, 0.6)',
              },
              '100%': {
                boxShadow: '0 0 20px rgba(239, 68, 68, 0.3)',
              },
            },
          }}
        />
      </Tooltip>
      
      <Fade in={true} timeout={1000}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            textAlign: 'center',
            maxWidth: 400,
            lineHeight: 1.5,
          }}
        >
          {level === 'warning' && '🚨 Take immediate shelter! A tornado has been spotted or indicated by radar.'}
          {level === 'watch' && '⚠️ Conditions are favorable for tornado development. Stay alert and be ready to take shelter.'}
          {level === 'safe' && '✅ No active tornado threats in your area. Stay weather aware!'}
        </Typography>
      </Fade>
    </Box>
  )
}
