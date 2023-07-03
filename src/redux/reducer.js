import {combineReducers, configureStore} from "@reduxjs/toolkit";
import main from "./reducer/main";


const  rootReducer = combineReducers({
    main,
})

export const store = configureStore({
    reducer: rootReducer
})