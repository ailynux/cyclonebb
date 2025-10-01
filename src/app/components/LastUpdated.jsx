import { Box, Chip, IconButton, Tooltip, Typography } from '@mui/material'
import { Refresh, AccessTime, Pause, PlayArrow } from '@mui/icons-material'
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

// Extend dayjs with relative time plugin
dayjs.extend(relativeTime)

export const LastUpdated = ({ 
  lastUpdated, 
  onRefresh, 
  isRefreshing = false,
  autoRefresh = true,
  onToggleAutoRefresh 
}) => {
  const [timeAgo, setTimeAgo] = useState('')

  useEffect(() => {
    const updateTimeAgo = () => {
      if (lastUpdated) {
        setTimeAgo(dayjs(lastUpdated).fromNow())
      }
    }

    updateTimeAgo()
    const interval = setInterval(updateTimeAgo, 1000)

    return () => clearInterval(interval)
  }, [lastUpdated])

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        flexWrap: 'wrap',
      }}
    >
      <Chip
        icon={<AccessTime />}
        label={lastUpdated ? `Updated ${timeAgo}` : 'Never updated'}
        size="small"
        variant="outlined"
        color={lastUpdated ? 'primary' : 'default'}
        sx={{
          fontWeight: 500,
        }}
      />

      <Tooltip title={autoRefresh ? 'Disable auto-refresh' : 'Enable auto-refresh'}>
        <IconButton
          size="small"
          onClick={onToggleAutoRefresh}
          color={autoRefresh ? 'primary' : 'default'}
          sx={{
            opacity: 0.8,
            '&:hover': {
              opacity: 1,
            },
          }}
        >
          {autoRefresh ? <Pause /> : <PlayArrow />}
        </IconButton>
      </Tooltip>

      <Tooltip title="Refresh now">
        <IconButton
          size="small"
          onClick={onRefresh}
          disabled={isRefreshing}
          sx={{
            opacity: 0.8,
            '&:hover': {
              opacity: 1,
            },
            '&:disabled': {
              opacity: 0.4,
            },
          }}
        >
          <Refresh 
            sx={{ 
              animation: isRefreshing ? 'spin 1s linear infinite' : 'none',
              '@keyframes spin': {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' },
              },
            }} 
          />
        </IconButton>
      </Tooltip>

      {autoRefresh && (
        <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
          Auto-refresh: 60s
        </Typography>
      )}
    </Box>
  )
}
