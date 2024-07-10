'use client'

import React, { useState } from 'react';
import { Button, CircularProgress, Tooltip, Zoom } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { UserData } from '@/types/user';
import { useRouter } from 'next/navigation';
import { updateStart, updateSuccess, updateError } from '@/store/reducers';
import { updateUserData } from '@/apis/userApi';

const generateRandomName = () => {
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Henry'];
  return names[Math.floor(Math.random() * names.length)];
};

const UpdateButton: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { loading } = useSelector((state: RootState) => state.updateProcess);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  
  const handleUpdate = async () => {
    dispatch(updateStart());
    const randomName = generateRandomName();
    const userData: UserData = { name: randomName };
  
    try {
      await updateUserData(userData);
      // Simulate a 2-second delay
      setTimeout(() => {
        dispatch(updateSuccess(`Successfully updated name to ${randomName}!`));
        setTooltipOpen(true);
        setTimeout(() => setTooltipOpen(false), 1000);
            router.refresh();
      }, 1000);
    } catch (error) {
      dispatch(updateError(error instanceof Error ? error.message : 'An error occurred while updating'));
    }
  };

  return (
    <Tooltip
      title="Click to get a new random name!"
      open={tooltipOpen}
      TransitionComponent={Zoom}
    >
      <Button
        onClick={handleUpdate}
        disabled={loading}
        variant="contained"
        sx={{
          height: 40,
          px: 3,
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
          borderRadius: 20
        }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Update Name'}
      </Button>
    </Tooltip>
  );
};

export default UpdateButton;