import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "../reducers";

 export const store=createStore(rootReducer,composeWithDevTools(applyMiddleware()));