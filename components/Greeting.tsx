import React from 'react';
import { Typography, Box } from '@mui/material';
import { UserData } from '@/types/user';

interface GreetingProps {
  isLoggedIn: boolean;
  userData: UserData | null;
  success: boolean;
}

const Greeting: React.FC<GreetingProps> = ({ isLoggedIn, userData }) => {
    const userName = userData?.name || 'User';
  
    return (
      <Box sx={{ mb: 2 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', letterSpacing: '-0.02em' }}>
          Hey, {isLoggedIn ? userName : 'Stranger'}!
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.125rem', mt: 1 }}>
          {isLoggedIn 
            ? 'Update your name anytime.'
            : 'Login to update and get your name!'}
        </Typography>
      </Box>
    );
};

export default Greeting;