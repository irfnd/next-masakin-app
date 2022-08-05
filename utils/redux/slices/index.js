import { combineReducers } from "@reduxjs/toolkit";

import { authReducers } from "@/utils/redux/slices/authSlice";

const rootReducers = combineReducers({ auth: authReducers });

export default rootReducers;
