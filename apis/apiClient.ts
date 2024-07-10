import { getAuthCookie } from '@/lib/auth-cookie';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export const apiClient = async (endpoint: string, method: string, data?: any, serverToken?: string) => {
  const token = serverToken || getAuthCookie();

  const response = await fetch(`${API_URL}${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || response.statusText);
  }

  return response.json();
};