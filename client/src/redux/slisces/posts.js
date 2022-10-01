import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (params) => {
  const { data } = await axios.post('/posts', params);
  return data;
})

export const fetchPostsGet = createAsyncThunk('posts/fetchPostsGet', async () => {
  const { data } = await axios.get('/posts');
  const dataRev = data.reverse();
  return dataRev;
})


const initialState = {
  posts :{
    items: [],
    status: "loading",
  },
  data: null,
  status : 'loading',
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.data = null;
      state.status = 'loads';
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = 'loadeds';
    },
    [fetchPosts.rejected]: (state) => {
      state.data = null;
      state.status = 'errors';
    },
    [fetchPostsGet.pending]: (state) => {
      state.posts.status = 'loading';
    },
    [fetchPostsGet.fulfilled]: (state, action) => {
      state.posts.items = action.payload;
      state.posts.status = 'loaded';
    },
    [fetchPostsGet.rejected]: (state) => {
      state.posts.items = [];
      state.posts.status = 'error';
    },
  },
});

export const postsReducer = postsSlice.reducer;