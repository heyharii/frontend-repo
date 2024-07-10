'use client'

import React, { useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { resetUpdateState, updateError } from '@/store/reducers';
import UpdateButton from '@/components/UpdateButton';
import LoginButton from '@/components/LoginButton';
import Greeting from '@/components/Greeting';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { UserData } from '@/types/user';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import ThemeSwitcher from '@/components/ThemeSwitcher';

interface HomeClientProps {
  userData: UserData | null;
}

interface UpdateProcessState {
  loading: boolean;
  success: boolean;
  error: string | null;
  message: string | null;
}

export default function HomeClient({ userData }: HomeClientProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useAuth();
  const router = useRouter();
  const isLoggedIn = Boolean(userData || user);
  const { loading, success, error, message } = useSelector<RootState, UpdateProcessState>(
    (state) => state.updateProcess
  );

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        dispatch(resetUpdateState());
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [success, error, dispatch]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.refresh();
    } catch (error) {
      console.error('Error signing out:', error);
      dispatch(updateError('Failed to sign out. Please try again.'));
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <ThemeSwitcher />
      <Greeting isLoggedIn={isLoggedIn} userData={userData} success={success} />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <UpdateButton />
          {isLoggedIn ? (
            <Button
              onClick={handleSignOut}
              variant="outlined"
              color="secondary"
              aria-label="Sign out"
              sx={{
                height: 40,
                px: 3,
                fontSize: '0.875rem',
                fontWeight: 500,
                borderRadius: 20,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              Sign Out
            </Button>
          ) : (
            <LoginButton />
          )}
        </Box>
        <Box 
          sx={{ 
            height: 24, 
            opacity: loading || success || error ? 1 : 0,
            transition: 'opacity 0.5s'
          }}
        >
          <Typography 
            color={
              loading ? 'info.main' : 
              success ? 'success.main' : 
              error ? 'error.main' : 'text.primary'
            }
          >
            {loading ? (message || 'Updating...') : 
             success ? message : 
             error ? error : ''}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}