export {}
// import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
//
// const signUpAction = createAsyncThunk("singUp/singUp",async (data,thunkAPI)=>{
//     const response = await fetch("http://localhost:3000/signup");
//     const res:string = await response.json();
//     return res;
// })
//
// const signUpSlice = createSlice({
//     name:"singUp",
//     initialState: {},
//     reducers: {
//         signUp() {}
//     },
//     extraReducers:{
//         [signUpAction.fulfilled]:(state,action)=>{
//             return {...state, ...action.payload}
//         }
//     }
// })
