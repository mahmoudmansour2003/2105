const API_BASE_URL = 'http://localhost:8081/api';

export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  companyName: string;
  role: 'INSTALLER' | 'DISTRIBUTOR' | 'FINANCIAL_CUSTOMER' | 'ADMIN';
  installerCertificationNumber?: string;
  primaryServiceArea?: string;
  yearsOfExperience?: number;
  primaryDistributionRegion?: string;
  estimatedAnnualSalesVolume?: string;
  numberOfActiveClients?: number;
  areaOfInterest?: string;
  estimatedInvestmentCapital?: string;
  preferredContactMethod?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface ApiResponse<T> {
  message: string;
  user?: T;
  error?: string;
}

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Test API connection
  async testConnection(): Promise<{ message: string; status: string }> {
    return this.request<{ message: string; status: string }>('/auth/test');
  }

  // Register new user
  async registerUser(user: User): Promise<ApiResponse<User>> {
    return this.request<ApiResponse<User>>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(user),
    });
  }

  // Login user
  async loginUser(credentials: LoginRequest): Promise<ApiResponse<User>> {
    return this.request<ApiResponse<User>>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  // Get all users (admin only)
  async getAllUsers(): Promise<User[]> {
    return this.request<User[]>('/admin/users');
  }

  // Get user by ID
  async getUserById(id: number): Promise<User> {
    return this.request<User>(`/admin/users/${id}`);
  }

  // Update user
  async updateUser(id: number, user: Partial<User>): Promise<User> {
    return this.request<User>(`/admin/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(user),
    });
  }

  // Delete user
  async deleteUser(id: number): Promise<void> {
    return this.request<void>(`/admin/users/${id}`, {
      method: 'DELETE',
    });
  }
}

export const apiService = new ApiService(); 