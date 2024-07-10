'use client'

import React from 'react';
import { Box, Container } from '@mui/material';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        minHeight: '100vh',
        py: { xs: 6, md: 12, lg: 16 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Box>
          {children}
        </Box>
      </Container>
    </Box>
  );
}