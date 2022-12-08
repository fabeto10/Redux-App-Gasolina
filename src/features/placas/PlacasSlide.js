import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { requestPlacaByDate } from './PlacasAPI';

const initialState = {
    placa: {
        fecha: new Date(),
        placa1: 1,
        placa2: 2
    },
};

export const placaAsync = createAsyncThunk(
    'date/requestPlacaByDate',
    async (date) => {
      const response = await requestPlacaByDate(date);
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
  );
export const getPlaca = createSlice({
  name: 'placa',
  initialState,
  reducer: {
    requestPlacaByDate: (state) => {
        state.placa.fecha = new Date(state.placa.fecha).toLocaleTimeString();
    }
  },
//   extraReducers(builder) {
//     builder.addCase(fetchPlaca.fulfilled, (state, action) => {
//       let result = state.push(action.payload);
//       console.log(result);
//       return result;
//     });
//   }
});

export default getPlaca.reducer