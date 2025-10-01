// Mock data for CycloneBB - simulates real weather alert data
export const sampleAlerts = {
  area: "CO",
  risk: { level: "watch", color: "warning" },
  count: 2,
  alerts: [
    {
      id: "abc123",
      event: "Tornado Watch",
      severity: "Severe",
      headline: "Tornado Watch for parts of eastern Colorado",
      sent: "2025-01-30T21:10:00Z",
      effective: "2025-01-30T21:10:00Z",
      ends: "2025-01-30T23:00:00Z",
      areaDesc: "Weld, Larimer, Adams",
      link: "https://www.weather.gov/alerts"
    },
    {
      id: "def456",
      event: "Severe Thunderstorm Warning",
      severity: "Severe",
      headline: "Ping-pong ball hail possible",
      sent: "2025-01-30T20:40:00Z",
      effective: "2025-01-30T20:40:00Z",
      ends: "2025-01-30T21:15:00Z",
      areaDesc: "Logan, Morgan",
      link: "https://www.weather.gov/alerts"
    }
  ]
}

export const sampleAlertsWarning = {
  area: "OK",
  risk: { level: "warning", color: "error" },
  count: 1,
  alerts: [
    {
      id: "xyz789",
      event: "Tornado Warning",
      severity: "Extreme",
      headline: "Tornado Warning for central Oklahoma",
      sent: "2025-01-30T22:00:00Z",
      effective: "2025-01-30T22:00:00Z",
      ends: "2025-01-30T23:30:00Z",
      areaDesc: "Oklahoma, Cleveland, McClain",
      link: "https://www.weather.gov/alerts"
    }
  ]
}

export const sampleAlertsSafe = {
  area: "KS",
  risk: { level: "safe", color: "success" },
  count: 0,
  alerts: []
}

// Mock data for different states
export const getMockDataByArea = (area) => {
  switch (area) {
    case 'CO':
      return sampleAlerts
    case 'OK':
      return sampleAlertsWarning
    case 'KS':
      return sampleAlertsSafe
    case 'TX':
      return {
        area: "TX",
        risk: { level: "watch", color: "warning" },
        count: 3,
        alerts: [
          {
            id: "tx001",
            event: "Tornado Watch",
            severity: "Severe",
            headline: "Tornado Watch for north Texas",
            sent: "2025-01-30T20:30:00Z",
            effective: "2025-01-30T20:30:00Z",
            ends: "2025-01-30T22:30:00Z",
            areaDesc: "Dallas, Tarrant, Collin",
            link: "https://www.weather.gov/alerts"
          },
          {
            id: "tx002",
            event: "Severe Thunderstorm Warning",
            severity: "Severe",
            headline: "Golf ball hail and 60 mph winds",
            sent: "2025-01-30T21:00:00Z",
            effective: "2025-01-30T21:00:00Z",
            ends: "2025-01-30T21:45:00Z",
            areaDesc: "Denton, Wise",
            link: "https://www.weather.gov/alerts"
          },
          {
            id: "tx003",
            event: "Flash Flood Warning",
            severity: "Moderate",
            headline: "Flash flooding possible",
            sent: "2025-01-30T21:15:00Z",
            effective: "2025-01-30T21:15:00Z",
            ends: "2025-01-30T23:15:00Z",
            areaDesc: "Parker, Hood",
            link: "https://www.weather.gov/alerts"
          }
        ]
      }
    default:
      return sampleAlertsSafe
  }
}
