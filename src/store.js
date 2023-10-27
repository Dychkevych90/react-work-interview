import {createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducer from "./redux-store/reducer";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist";
import {composeWithDevTools} from "redux-devtools-extension";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer, composedEnhancer)
const persistor = persistStore(store)

export  {
  store,
  persistor
}
