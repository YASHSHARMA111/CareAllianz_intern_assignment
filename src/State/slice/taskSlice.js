import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: {
        "09293": {
            taskId: "09293",
            taskData: {
                title: "this first task",
                description: "this first task full description",
                completed: true,
            },
        },
    },
};

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks[action.payload.taskId] = action.payload;
        },
        editTask: (state, action) => {
            state.tasks[action.payload.taskId] = action.payload.task;
        },
        deleteTask: (state, action) => {
            delete state.tasks[action.payload];
        },
    },
});

// Action creators are generated for each case reducer function
export const { addTask, editTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
