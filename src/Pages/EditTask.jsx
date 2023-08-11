import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../Components/Button";
import { TextArea } from "../Components/TextArea";
import { TextInput } from "../Components/TextInput";
import { editTask } from "../State/slice/taskSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { PageLayout } from "../Components/PageLayout";

export const EditTask = () => {
    const { taskId } = useParams();
    const { tasks } = useSelector((state) => state.tasks);
    const task = tasks[taskId];
    const dispatch = useDispatch();
    const [title, setTitle] = useState(task.taskData.title);
    const [description, setDescription] = useState(task.taskData.description);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(
            editTask({
                taskId,
                task: {
                    taskId,
                    taskData: {
                        title,
                        description,
                        completed: task.taskData.completed,
                    },
                },
            })
        );
        navigate("/task/" + taskId);
    };

    return (
        <PageLayout title={"Edit task"}>
            <form
                onSubmit={onSubmit}
                className="w-full p-2 gap-3 mt-3 flex flex-col"
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
                <Button title={"Edit Task"} />
            </form>
        </PageLayout>
    );
};
