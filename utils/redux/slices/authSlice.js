import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authWrapper from "@/utils/axios/authWrapper";

const extraActions = {
	login: createAsyncThunk("auth/login", async (data, thunkAPI) => {
		try {
			const res = await authWrapper.login(data);
			const { accessToken, refreshToken, ...results } = res.data;
			return results;
		} catch (err) {
			return thunkAPI.rejectWithValue(err?.response?.data?.message);
		}
	}),
};

const extraReducers = () => {
	const { login } = extraActions;
	return {
		[login.fulfilled]: (state, action) => {
			state.isLoggedIn = true;
			state.user = action.payload;
		},
		[login.rejected]: (state) => {
			state.isLoggedIn = false;
			state.user = null;
		},
	};
};

const initialState = { isLoggedIn: false, user: null };

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout: (state) => {
			authWrapper.logout();
			state.isLoggedIn = false;
			state.user = null;
		},
	},
	extraReducers: extraReducers(),
});

export const authActions = { ...authSlice.actions, ...extraActions };
export const authReducers = authSlice.reducer;
