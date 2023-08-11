import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: {
        hyahd: {
            contactId: "hyahd",
            name: "Yash Sharma",
            phone: "9893929429",
            email: "yash.sharma@gmail.com",
        },
    },
};

const contactSlice = createSlice({
    initialState,
    name: "contacts",
    reducers: {
        addcontact: (state, action) => {
            state.contacts[action.payload.id] = action.payload.contact;
        },
        removecontact: (state, action) => {
            delete state.contacts[action.payload.id];
        },
    },
});

export const { addcontact, removecontact } = contactSlice.actions;
export default contactSlice.reducer;
