import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { filmCardProps } from '../types';
import axios from 'axios';

export interface FilmCard {
  loading: boolean
  card: filmCardProps | null
  error: string | undefined
}

const initialState: FilmCard = {
  loading: false,
  card: null,
  error: '',
}

const url = 'https://www.omdbapi.com?apikey=64405bd2&i=';

export const getFilmCard = createAsyncThunk('card/getFilmCard', 
  (id: string) => {    
    const queryUrl = url + id;
    
    return axios.get(queryUrl)
      .then(res => {      
        if(res.status === 200) {        
          return res.data
        }      
      })  
})

export const FilmCardSlice = createSlice({
  name: 'filmCard',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getFilmCard.pending, state => {
        state.loading = true
      })
      .addCase(getFilmCard.fulfilled, (state, action) => {
        state.loading = false
        state.card = action.payload
        state.error = ''
      })
      .addCase(getFilmCard.rejected, (state, action) => {
        state.loading = false
        state.card = null
        state.error = action.error.message
      })
  }
})

export default FilmCardSlice.reducer