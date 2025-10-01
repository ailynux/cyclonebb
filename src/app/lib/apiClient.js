import { getMockDataByArea } from './mockData'
import { DEBUG_FLAGS } from './constants'

// Mock API client that simulates real API calls
// Later this can be replaced with actual fetch calls to your backend

export const apiClient = {
  // Simulate network delay
  async delay(ms = 600) {
    return new Promise(resolve => setTimeout(resolve, ms))
  },

  // Simulate random API errors
  simulateError() {
    if (DEBUG_FLAGS.SIMULATE_ERROR && Math.random() < 0.2) {
      throw new Error('Simulated API error - network timeout')
    }
  },

  // Get alerts for a specific area
  async getAlerts(area = 'CO') {
    try {
      // Simulate network delay
      if (DEBUG_FLAGS.SIMULATE_DELAY) {
        await this.delay()
      }

      // Simulate random errors
      this.simulateError()

      // Simulate network failure
      if (DEBUG_FLAGS.MOCK_NETWORK_FAILURE) {
        throw new Error('Network request failed')
      }

      // Return mock data
      const mockData = getMockDataByArea(area)
      
      // Simulate API response format
      return {
        success: true,
        data: mockData,
        timestamp: new Date().toISOString(),
        source: 'mock'
      }
    } catch (error) {
      console.error('API Error:', error)
      throw error
    }
  },

  // Get forecast data (placeholder for future implementation)
  async getForecast(area = 'CO') {
    await this.delay(300)
    return {
      success: true,
      data: {
        area,
        forecast: 'Mock forecast data coming soon...'
      },
      timestamp: new Date().toISOString()
    }
  },

  // Get radar data (placeholder for future implementation)
  async getRadar(area = 'CO') {
    await this.delay(400)
    return {
      success: true,
      data: {
        area,
        radar: 'Mock radar data coming soon...'
      },
      timestamp: new Date().toISOString()
    }
  }
}

// Export individual functions for easier use with React Query
export const getAlerts = (area) => apiClient.getAlerts(area)
export const getForecast = (area) => apiClient.getForecast(area)
export const getRadar = (area) => apiClient.getRadar(area)
