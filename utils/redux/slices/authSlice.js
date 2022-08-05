import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authWrapper from "@/utils/axios/authWrapper";

const extraActions = {
	register: createAsyncThunk("auth/register", async (data, thunkAPI) => {
		try {
			const res = await authWrapper.register(data);
			return res.data.results;
		} catch (err) {
			return thunkAPI.rejectWithValue(err?.response?.data?.details);
		}
	}),
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
	const { register, login } = extraActions;
	return {
		[register.fulfilled]: () => initialState,
		[register.rejected]: () => initialState,
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
		logout: () => {
			authWrapper.logout();
			return initialState;
		},
		reset: () => initialState,
	},
	extraReducers: extraReducers(),
});

export const authActions = { ...authSlice.actions, ...extraActions };
export const authReducers = authSlice.reducer;
