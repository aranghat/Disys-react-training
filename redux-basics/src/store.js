import { configureStore } from "@reduxjs/toolkit";

import mystate from "./MyState";

export default configureStore({
    reducer: {
        numberstate : mystate,
    }
});