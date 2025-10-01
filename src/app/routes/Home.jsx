import { useState } from 'react'
import { 
  Container, 
  Box, 
  Grid, 
  Typography, 
  Paper,
  LinearProgress 
} from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { AreaSelector } from '../components/AreaSelector'
import { RiskBadge } from '../components/RiskBadge'
import { AlertsList } from '../components/AlertsList'
import { StormMiniMap } from '../components/StormMiniMap'
import { LastUpdated } from '../components/LastUpdated'
import TornadoScene from '../components/TornadoScene'
import { getAlerts } from '../lib/apiClient'
import { DEFAULT_STATE, REFETCH_INTERVALS } from '../lib/constants'

export const Home = () => {
  const [selectedArea, setSelectedArea] = useState(DEFAULT_STATE)
  const [autoRefresh, setAutoRefresh] = useState(true)

  // Fetch alerts data with React Query
  const {
    data: alertsResponse,
    isLoading,
    error,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ['alerts', selectedArea],
    queryFn: () => getAlerts(selectedArea),
    refetchInterval: autoRefresh ? REFETCH_INTERVALS.NORMAL : false,
    staleTime: REFETCH_INTERVALS.NORMAL,
    retry: 3,
  })

  const alertsData = alertsResponse?.data || { alerts: [], risk: { level: 'safe', color: 'success', label: 'SAFE' } }
  const { alerts, risk, area } = alertsData

  const handleAreaChange = (newArea) => {
    setSelectedArea(newArea)
  }

  const handleRefresh = () => {
    refetch()
  }

  const handleToggleAutoRefresh = () => {
    setAutoRefresh(!autoRefresh)
  }

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      {/* Loading indicator for route changes */}
      {isRefetching && (
        <LinearProgress 
          sx={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            zIndex: 1300,
            backgroundColor: 'transparent',
            '& .MuiLinearProgress-bar': {
              backgroundColor: 'primary.main',
            },
          }} 
        />
      )}

      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Header Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
            Tornado Dashboard
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
            Live weather alerts and storm tracking for {area || selectedArea}
          </Typography>

          {/* Controls */}
          <Paper
            sx={{
              p: 3,
              backgroundColor: 'background.paper',
              border: '1px solid',
              borderColor: 'border.main',
              borderRadius: 3,
            }}
          >
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                  Select Area
                </Typography>
                <AreaSelector
                  value={selectedArea}
                  onChange={handleAreaChange}
                  disabled={isLoading}
                />
              </Grid>
              
              <Grid item xs={12} sm={6} md={8}>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                  Last Updated
                </Typography>
                <LastUpdated
                  lastUpdated={alertsResponse?.timestamp}
                  onRefresh={handleRefresh}
                  isRefreshing={isRefetching}
                  autoRefresh={autoRefresh}
                  onToggleAutoRefresh={handleToggleAutoRefresh}
                />
              </Grid>
            </Grid>
          </Paper>
        </Box>

        {/* Risk Banner */}
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
          <Paper
            sx={{
              p: 4,
              backgroundColor: 'background.paper',
              border: '1px solid',
              borderColor: 'border.main',
              borderRadius: 3,
              maxWidth: 600,
              width: '100%',
            }}
          >
            <RiskBadge risk={risk} />
          </Paper>
        </Box>

        {/* Main Content Grid */}
        <Grid container spacing={4}>
          {/* Alerts List */}
          <Grid item xs={12} lg={7}>
            <Paper
              sx={{
                p: 3,
                backgroundColor: 'background.paper',
                border: '1px solid',
                borderColor: 'border.main',
                borderRadius: 3,
                height: 'fit-content',
              }}
            >
              <AlertsList
                alerts={alerts}
                isLoading={isLoading}
                error={error}
                onRetry={handleRefresh}
                area={area || selectedArea}
              />
            </Paper>
          </Grid>

          {/* 3D Tornado Visualization */}
          <Grid item xs={12} lg={5}>
            <Paper
              sx={{
                p: 0,
                backgroundColor: 'background.paper',
                border: '1px solid',
                borderColor: 'border.main',
                borderRadius: 3,
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                  🌪️ Live Tornado Visualization
                </Typography>
              </Box>
              <TornadoScene isMobile={false} />
            </Paper>
          </Grid>
        </Grid>

        {/* EF Scale Legend */}
        <Box sx={{ mt: 4 }}>
          <Paper
            sx={{
              p: 3,
              backgroundColor: 'background.paper',
              border: '1px solid',
              borderColor: 'border.main',
              borderRadius: 3,
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Enhanced Fujita Scale Reference
            </Typography>
            <Grid container spacing={2}>
              {[
                { level: 'EF0', description: '65-85 mph winds', color: '#22c55e' },
                { level: 'EF1', description: '86-110 mph winds', color: '#f59e0b' },
                { level: 'EF2', description: '111-135 mph winds', color: '#f97316' },
                { level: 'EF3', description: '136-165 mph winds', color: '#ef4444' },
                { level: 'EF4', description: '166-200 mph winds', color: '#dc2626' },
                { level: 'EF5', description: '200+ mph winds', color: '#991b1b' },
              ].map((item) => (
                <Grid item xs={6} sm={4} md={2} key={item.level}>
                  <Box
                    sx={{
                      textAlign: 'center',
                      p: 1,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        backgroundColor: item.color,
                        borderRadius: '50%',
                        mx: 'auto',
                        mb: 1,
                      }}
                    />
                    <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>
                      {item.level}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}
