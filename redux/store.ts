import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // You can choose the storage mechanism you prefer
import authReducer from 'redux/auth/slice';
import categoryReducer from 'redux/category/slice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root', // Key for the persisted state in storage
  storage: AsyncStorage,// Storage mechanism
  whitelist: ['auth', 'category'], // List of reducers to persist
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedCategoryReducer = persistReducer(persistConfig, categoryReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    category: persistedCategoryReducer,
  },
});

export const persistor = persistStore(store); // Persistor for later use

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
