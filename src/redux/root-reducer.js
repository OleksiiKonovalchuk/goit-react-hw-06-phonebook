import filterReducer from './filter/filter-slice';
import contactReducer from './contacts/contact-slice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
const persistConfig = {
  key: 'contacts',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
