import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { filmListItemProps } from '../types';
import axios from 'axios';

export interface FilmList {
  loading: boolean,
  list: filmListItemProps[],
  error: string | undefined
}

const initialState: FilmList = {
  loading: false,
  list: [],
  error: ''
}

const random = ['Star+wars', 'Terminator', 'Lord+of+the+rings', 'Matrix', 'Friends']
const urlBase = 'https://www.omdbapi.com?apikey=64405bd2&s=';
const urlRandome = urlBase + random[Math.round(Math.random() * random.length)];

export const getFilmList = createAsyncThunk('list/getFilmList', 
  (query?: string) => {
    query = query && query.replace(/ /ig, '+');
    const castomUrl = query && urlBase + query;
    const url = castomUrl || urlRandome;
    
    return axios.get(url)
      .then(res => {      
        if(res.status === 200) {        
          return res.data.Search || []
        }      
      })  
})

export const FilmListSlice = createSlice({
  name: 'filmList',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getFilmList.pending, state => {
        state.loading = true
      })
      .addCase(getFilmList.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload
        state.error = ''
      })
      .addCase(getFilmList.rejected, (state, action) => {
        state.loading = false
        state.list = []
        state.error = action.error.message
      })
  }
})

export default FilmListSlice.reducer