import axios from 'axios';

export default class CentralDataService {
  constructor(baseURL) {
    this.client = axios.create({
      baseURL: baseURL || '', // Set a default baseURL if required
      timeout: 10000, // Default timeout
    });

    // Add request and response interceptors
    this.client.interceptors.request.use(
      (config) => {
        // Modify request before sending (e.g., attach tokens, headers)
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.client.interceptors.response.use(
      (response) => response.data,
      (error) => {
        // Handle errors globally
        if (error.response) {
          console.error('API Error:', error.response.data);
        }
        return Promise.reject(error);
      }
    );
  }

  async makeRequest(config) {
    try {
      const response = await this.client.request(config);
      return response;
    } catch (error) {
      throw error;
    }
  }

  // Only one time use case for logging in user
  async authenticateToken (config, token) {
    try {
      const response = await this.client.request({
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    }
    catch (error) {
      throw error;
    }
  }
}

// Export as singleton or create instances with different base URLs
export const centralDataServoce = new CentralDataService('https://api.example.com');
