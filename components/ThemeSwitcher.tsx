import React, { useState, useEffect } from 'react';
import { Box, Typography, Switch } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';

export default function ThemeSwitcher() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  if (!mounted) {
    // Return null or a placeholder to avoid hydration mismatch
    return null;
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mb: 2 }}>
      <Typography sx={{ mr: 1 }}>
        {mode === 'light' ? 'Daylight' : 'Pastel'}
      </Typography>
      <Switch
        checked={mode === 'dark'}
        onChange={handleThemeChange}
        inputProps={{ 'aria-label': 'toggle pastel mode' }}
      />
    </Box>
  );
}