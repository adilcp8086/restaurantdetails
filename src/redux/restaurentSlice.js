import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//For calling APIsin reduc=x/slice we use thunk
//thunk is a  methid provided by reduc to make api calls
//API calls are asynchronous function ,so thunk make use of ,concept of Promise

//function to call API
export const fetchRestaurent = createAsyncThunk('restaurentlist/etchRestaurent', () => {
    const result = axios.get('/restaurant.json').then(response => response.data);
    return result

})

const restaurentSlice = createSlice({
    name: "restaurentlist",
    initialState: {
        loading: false,//pending
        allRestaurent: [],
        err: "",  //reject
        searchRestauernt: []

    },
    extraReducers: (builder) => {
        builder.addCase(fetchRestaurent.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchRestaurent.fulfilled, (state, action) => {
            state.loading = false
            state.allRestaurent = action.payload
            state.searchRestauernt = action.payload
            state.error = ""


        })
        builder.addCase(fetchRestaurent.rejected, (state, action) => {

            state.loading = false;
            state.allRestaurent = [];
            state.error = action.error.message


        })

    },
    reducers: {
        search: (state, action) => {
            state.allRestaurent.restaurants = state.allRestaurent.restaurants.filter(
                item => item.neighborhood.toLowerCase().includes(action.payload)
            )
        }

    }



})

export default restaurentSlice.reducer
export const { search } = restaurentSlice.actions