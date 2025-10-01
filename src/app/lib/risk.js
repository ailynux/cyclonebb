// Risk level mapping logic for weather alerts
export const mapAlertsToRisk = (alerts) => {
  if (!alerts || alerts.length === 0) {
    return { level: 'safe', color: 'success', label: 'SAFE' }
  }

  // Check for tornado warnings first (highest risk)
  const hasTornadoWarning = alerts.some(alert => 
    alert.event && alert.event.toLowerCase().includes('tornado warning')
  )
  
  if (hasTornadoWarning) {
    return { level: 'warning', color: 'error', label: 'TORNADO WARNING' }
  }

  // Check for tornado watches (medium risk)
  const hasTornadoWatch = alerts.some(alert => 
    alert.event && alert.event.toLowerCase().includes('tornado watch')
  )
  
  if (hasTornadoWatch) {
    return { level: 'watch', color: 'warning', label: 'TORNADO WATCH' }
  }

  // Check for severe weather (low risk)
  const hasSevereWeather = alerts.some(alert => 
    alert.severity && (alert.severity.toLowerCase().includes('severe') || 
                      alert.severity.toLowerCase().includes('extreme'))
  )
  
  if (hasSevereWeather) {
    return { level: 'watch', color: 'warning', label: 'SEVERE WEATHER' }
  }

  // Default to safe
  return { level: 'safe', color: 'success', label: 'SAFE' }
}

// Get risk icon based on level
export const getRiskIcon = (level) => {
  switch (level) {
    case 'warning':
      return '🔴'
    case 'watch':
      return '🟠'
    case 'safe':
    default:
      return '🟢'
  }
}

// Get risk description tooltip text
export const getRiskDescription = (level) => {
  switch (level) {
    case 'warning':
      return 'Tornado Warning: A tornado has been spotted or indicated by radar. Take immediate shelter!'
    case 'watch':
      return 'Tornado Watch: Conditions are favorable for tornado development. Stay alert and be ready to take shelter.'
    case 'safe':
    default:
      return 'No active tornado threats in your area. Stay weather aware!'
  }
}
