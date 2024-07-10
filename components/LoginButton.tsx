import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'next-view-transitions'

const LoginButton: React.FC = () => {
  return (
    <Link href="/login" passHref>
      <Button
        component="button"
        variant="contained"
        sx={{
          height: 40,
          px: 3,
          borderRadius: 20,
          fontSize: '0.875rem',
          fontWeight: 500,
          boxShadow: 'none',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
          transition: 'all 0.3s ease-in-out',
          '&:hover:not(:disabled)': {
            transform: 'scale(1.05)',
          },
        }}
        style={{
            borderRadius: 20,
        }}
      >
        Login
      </Button>
    </Link>
  );
};

export default LoginButton;