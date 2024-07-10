import { apiClient } from './apiClient';
import { UserData } from '@/types/user';

export const updateUserData = async (data: UserData): Promise<UserData> => {
  return apiClient('/update-user-data', 'PUT', data);
};

export const fetchUserData = async (token?: string): Promise<UserData> => {
  return apiClient('/fetch-user-data', 'GET', undefined, token);
};