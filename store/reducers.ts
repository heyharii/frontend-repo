import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UpdateProcessState {
  loading: boolean;
  error: string | null;
  success: boolean;
  message: string | null;
}

const initialState: UpdateProcessState = {
  loading: false,
  error: null,
  success: false,
  message: null,
};

const updateProcessSlice = createSlice({
  name: 'updateProcess',
  initialState,
  reducers: {
    updateStart: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
      state.message = 'Updating...';
    },
    updateSuccess: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = null;
      state.success = true;
      state.message = action.payload;
    },
    updateError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
      state.message = null;
    },
    resetUpdateState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
      state.message = null;
    },
  },
});

export const { updateStart, updateSuccess, updateError, resetUpdateState } = updateProcessSlice.actions;
export default updateProcessSlice.reducer;
