import { Box, Typography, Paper } from '@mui/material'

export const EmptyState = ({ icon, title, message, action }) => {
  return (
    <Paper
      sx={{
        p: 4,
        textAlign: 'center',
        backgroundColor: 'background.paper',
        border: '1px solid',
        borderColor: 'border.main',
        borderRadius: 3,
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography variant="h2" sx={{ fontSize: '3rem' }}>
          {icon}
        </Typography>
      </Box>
      
      <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
        {title}
      </Typography>
      
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 400, mx: 'auto' }}>
        {message}
      </Typography>
      
      {action && (
        <Box>
          {action}
        </Box>
      )}
    </Paper>
  )
}
