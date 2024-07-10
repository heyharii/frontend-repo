'use client'

import React, { useState } from 'react';
import { Box, TextField, Button, Typography, InputAdornment, IconButton, Container, Paper } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { addAuthCookie } from '@/lib/auth-cookie';
import { Link } from 'next-view-transitions'
import { revalidatePage } from '@/lib/revalidate-path';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function Login() {
  const [email, setEmail] = useState('admin@admin.com');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken();
      addAuthCookie(token);
      revalidatePage()
      router.push('/');
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <ThemeSwitcher />
      <Paper style={{ borderRadius: 20 }} elevation={3} sx={{ mt: 1, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleLogin} sx={{ width: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
            <Link href="/" passHref>
              <Button
                component="button"
                variant="text"
                sx={{ width: '100px' }}
              >
                Cancel
              </Button>
            </Link>
            <Button
              type="submit"
              variant="contained"
              sx={{ width: '100px' }}
              style={{ borderRadius: 20 }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}