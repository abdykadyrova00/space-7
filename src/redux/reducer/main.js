import { createSlice } from "@reduxjs/toolkit";
import {LOCALES} from "../../react-intl/locales";


const initialState = {
    locale: LOCALES.RUSSIAN,
};

const main = createSlice({
    name: "main",
    initialState,
    reducers: {
        setLocale(state, action) {
            state.locale = action.payload;
        },
    },
});

export const {setLocale} =
    main.actions;

export default main.reducer;