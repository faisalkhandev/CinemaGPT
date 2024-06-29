import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: []
    },
    reducers: {
        addUser: (state, action) => {

            state.user.push(action.payload)

        },
        removeUser: (state) => {
            state.user.length === 0
        }
    }
})


export const { addUser } = userSlice.actions

export default userSlice.reducer