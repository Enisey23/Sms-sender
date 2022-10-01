import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slisces/auth';
import { postsReducer } from './slisces/posts';

const store = configureStore({
    reducer: {
        auth: authReducer,
        posts: postsReducer,
    },
})
 
export default store;