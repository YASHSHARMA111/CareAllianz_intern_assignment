import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ideas: {
        hyahd: {
            ideaId: "hyahd",
            title: "this is my title",
            color: "bg-red-100",
        },
    },
};

const ideaSlice = createSlice({
    initialState,
    name: "ideas",
    reducers: {
        addIdea: (state, action) => {
            state.ideas[action.payload.id] = action.payload.idea;
        },
        removeIdea: (state, action) => {
            delete state.ideas[action.payload.id];
        },
    },
});

export const { addIdea, removeIdea } = ideaSlice.actions;
export default ideaSlice.reducer;
