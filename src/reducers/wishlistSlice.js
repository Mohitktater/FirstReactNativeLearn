import { createSlice } from '@reduxjs/toolkit';
const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      console.log('Action received:', action); 
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingIndex >= 0) {
        state.items.splice(existingIndex, 1);
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); 
      }
      console.log('State after update:', JSON.parse(JSON.stringify(state.items)));
    },
    addToWishlistfromCart : (state, action) => {
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingIndex >= 0) { 
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); 
      }
    },
    UpdateWishlistByAddOne: (state, action) => {
      console.log(state, action);
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id);
      state.items[existingIndex].quantity += 1; 
      console.log('State after adding by one:', JSON.parse(JSON.stringify(state.items)));
    },
    UpdateWishlistByDeleteOne: (state, action) => { 
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id);
      state.items.splice(existingIndex, 1);
      console.log('State after delete by one:', JSON.parse(JSON.stringify(state.items)));
   },
   UpdateWishlistByDeleteProduct: (state, action) => { 
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id);
      if(existingIndex >= 0){
        state.items.splice(existingIndex, 1);
      } else { 
      }
   console.log('State after deleting the product:', JSON.parse(JSON.stringify(state.items)));
 },
    
  },
  
});


export const { addToWishlist , UpdateWishlistByAddOne, UpdateWishlistByDeleteOne, UpdateWishlistByDeleteProduct, addToWishlistfromCart} = wishlistSlice.actions;
export default wishlistSlice.reducer;