import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const fetchMessage = createAsyncThunk(
    'users/fetchMessage',
    async (userMessage) => {
        const response = await fetch('/api/addMessage', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userMessage)
        })

        return response.data
    }
)

const messageThunk = createSlice({
    name: 'messageThunk',
    initialState: {
        loading: 'idle'
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMessage.pending, (state) => {
            state.loading = 'pending'
        })
        builder.addCase(fetchMessage.fulfilled, (state) => {
            state.loading = 'success'
        })
        builder.addCase(fetchMessage.rejected, (state) => {
            state.loading = 'error'
        })
    }
})

export { fetchMessage }
export default messageThunk.reducer