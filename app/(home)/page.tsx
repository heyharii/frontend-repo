export const dynamic = 'force-dynamic'
import { cookies } from 'next/headers';
import { fetchUserData } from '@/apis/userApi';
import { UserData } from '@/types/user';
import HomeClient from './page.client';

async function getUserData(token: string): Promise<UserData | null> {
  try {
    return await fetchUserData(token);
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
}

export default async function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get('authToken');
  
  let userData: UserData | null = null;
  if (token) {
    userData = await getUserData(token.value);
  }

  return (
    <HomeClient userData={userData} />
  );
}