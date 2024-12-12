import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'; 
import { combineReducers } from 'redux';
import wishlistReducer from './reducers/wishlistSlice';
//import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

 
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    debug: true,
};
 
const rootReducer = combineReducers({
  wishlist: wishlistReducer,
});
 
const persistedReducer = persistReducer(persistConfig, rootReducer);
 
export const store = configureStore({
  reducer: persistedReducer
});
 
export const persistor = persistStore(store);
 