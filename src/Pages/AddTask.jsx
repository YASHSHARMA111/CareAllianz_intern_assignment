import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../Components/Button";
import { TextArea } from "../Components/TextArea";
import { TextInput } from "../Components/TextInput";
import { addTask } from "../State/slice/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { PageLayout } from "../Components/PageLayout";

export const AddTask = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(
            addTask({
                taskId: uuid(),
                taskData: {
                    title,
                    description,
                    completed: false,
                },
            })
        );
        navigate("/tasks");
    };

    return (
        <PageLayout title={"Add Task"}>
            <form
                onSubmit={onSubmit}
                className="w-full gap-3 mt-3 flex flex-col"
            >
                <TextInput
                    placeholder={"Enter your title"}
                    value={title}
                    setter={setTitle}
                />
                <TextArea
                    value={description}
                    setter={setDescription}
                    placeholder={"Enter your description"}
                />
                <Button title={"AddTask"} />
            </form>
        </PageLayout>
    );
};
