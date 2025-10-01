import { createTheme } from '@mui/material/styles'
import { palette } from './palette'
import { typography } from './typography'

export const theme = createTheme({
  palette,
  typography,
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: palette.background.default,
          color: palette.text.primary,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: palette.background.paper,
          border: `1px solid ${palette.border.main}`,
          borderRadius: 16,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          '&:hover': {
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 24px',
        },
        contained: {
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            boxShadow: '0 6px 8px -1px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(17, 24, 39, 0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${palette.border.main}`,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            '& fieldset': {
              borderColor: palette.border.main,
            },
            '&:hover fieldset': {
              borderColor: palette.border.light,
            },
            '&.Mui-focused fieldset': {
              borderColor: palette.primary.main,
            },
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          backgroundColor: palette.background.paper,
          border: `1px solid ${palette.border.main}`,
          borderRadius: 12,
          marginTop: 8,
        },
      },
    },
  },
})
