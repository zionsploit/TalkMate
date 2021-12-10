import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
    name: 'accountSlice',
    initialState: {
        account: {}
    },
    reducers: {
        setAccount: (state, action) => {
            state.account = action.payload
        }
    }
})

export const { setAccount } = accountSlice.actions
export default accountSlice.reducer