// Typography configuration for CycloneBB
export const typography = {
  fontFamily: '"Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  h1: {
    fontSize: '3.5rem',
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: '-0.025em',
    '@media (max-width:600px)': {
      fontSize: '2.5rem',
    },
  },
  h2: {
    fontSize: '2.5rem',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.025em',
    '@media (max-width:600px)': {
      fontSize: '2rem',
    },
  },
  h3: {
    fontSize: '1.875rem',
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: '-0.025em',
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h6: {
    fontSize: '1.125rem',
    fontWeight: 600,
    lineHeight: 1.5,
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.6,
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.6,
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: '0.025em',
    textTransform: 'none',
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 1.5,
  },
  overline: {
    fontSize: '0.75rem',
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
}
