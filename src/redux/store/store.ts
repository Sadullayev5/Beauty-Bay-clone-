import { configureStore } from "@reduxjs/toolkit";

import {api} from '../api/index'
import likeReducer from '../slice/likeSlice'
import cartReducer from '../slice/cartSlice'
import currencyReducer from '../slice/currencySlice'

const store = configureStore({
    reducer : {
        currency: currencyReducer,
        cart : cartReducer,
        like : likeReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 

export {store}