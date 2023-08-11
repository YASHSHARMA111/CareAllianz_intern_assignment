import { configureStore } from "@reduxjs/toolkit";
import tasks from "./slice/taskSlice";
import ideas from "./slice/ideaSlice";
import contacts from "./slice/contactSlice";

export const store = configureStore({
    reducer: {
        tasks,
        ideas,
        contacts,
    },
});
