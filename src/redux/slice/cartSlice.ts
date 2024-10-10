import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Root } from "../../types/index";

interface cartState {
    Products: Root[]; 
}

const initialState: cartState = {
    Products: localStorage.getItem("cartProducts") ? JSON.parse(localStorage.getItem("cartProducts")!) : []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action: PayloadAction<Root>) => { 
            const index = state.Products.findIndex(product => product.id === action.payload.id)
            
            if (index === -1) {
                state.Products.push({...action.payload , quantity: 1});
                localStorage.setItem("cartProducts", JSON.stringify(state.Products));
            } else {
                state.Products[index].quantity += 1;
                localStorage.setItem("cartProducts", JSON.stringify(state.Products));
            }
        },
        removeCart: (state, action: PayloadAction<Root>) => {
            const index = state.Products.findIndex(product => product.id === action.payload.id)

            if (index !== -1) {
                state.Products[index].quantity -= 1;
                localStorage.setItem("cartProducts", JSON.stringify(state.Products));
            }
        },
        clearItemCart: (state, action: PayloadAction<Root>) => {
            const index = state.Products.findIndex(product => product.id === action.payload.id)

            if (index !== -1) {
                state.Products.splice(index, 1);
                localStorage.setItem("cartProducts", JSON.stringify(state.Products));
            }
        },
        clearCart : (state) => {
            state.Products = [];
            localStorage.setItem("cartProducts", JSON.stringify(state.Products));
        }    }
})

export default cartSlice.reducer;
export const { addCart, removeCart , clearItemCart , clearCart } = cartSlice.actions;


