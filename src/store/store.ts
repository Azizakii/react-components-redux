//import { userApi } from '../services/UserService';
import { combineReducers, configureStore, ReducerType } from "@reduxjs/toolkit";
import uiReducer from "./reducers/UISlice";
import { userApi } from "../services/userService";

const rootReducer = combineReducers({
	ui: uiReducer,
	[userApi.reducerPath]: userApi.reducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(userApi.middleware),
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type Appstore = ReturnType<typeof setupStore>;
export type AppDispatch = Appstore["dispatch"];
