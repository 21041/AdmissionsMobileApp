import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedTests: [],
};

export const testSlice = createSlice({
  name: 'tests',
  initialState,
  reducers: {
    addTest: (state, action) => {
      if (!state.selectedTests.some(test => test.id === action.payload.id)) {
        state.selectedTests.push(action.payload);
      }
    },
    removeTest: (state, action) => {
      state.selectedTests = state.selectedTests.filter(
        test => test.id !== action.payload.id,
      );
    },
    clearTests: state => {
      state.selectedTests = [];
    },
  },
});

export const {addTest, removeTest, clearTests} = testSlice.actions;
export const selectSelectedTests = state => state.tests.selectedTests;

export default testSlice.reducer;
