import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from "./reducers";

const persistConfig = {
    key: 'root',
    storage,
}

// const middleware = [thunk];
//composeWithDevTools(applyMiddleware(...middleware)))

export default (initialState = {}, history) => {
    const persistedReducer = persistReducer(persistConfig, rootReducer)

    const store = createStore(
        persistedReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    )

    const persistor = persistStore(store)

    return { store, persistor }
}