import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Root } from "../../types/index";

interface LikeState {
    likedProducts: Root[]; 
}

const initialState: LikeState = {
    likedProducts: localStorage.getItem("likedProducts") ? JSON.parse(localStorage.getItem("likedProducts")!) : []
}

const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        addLike: (state, action: PayloadAction<Root>) => { 
            state.likedProducts.push(action.payload);
            localStorage.setItem("likedProducts", JSON.stringify(state.likedProducts));
        },
        removeLike: (state, action: PayloadAction<Root>) => {
            state.likedProducts = state.likedProducts.filter(product => product.id !== action.payload.id);
            localStorage.setItem("likedProducts", JSON.stringify(state.likedProducts));
        }
    }
})

export default likeSlice.reducer;
export const { addLike, removeLike } = likeSlice.actions;