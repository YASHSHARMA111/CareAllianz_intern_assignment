import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { editTask, deleteTask } from "../State/slice/taskSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Popup from "../Components/Popup";
import { PageLayout } from "../Components/PageLayout";

export const Task = () => {
    const { taskId } = useParams();
    const { tasks } = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const task = tasks[taskId];

    const [deletePopup, setDeletePopup] = useState(false);

    const setCompleted = () => {
        dispatch(
            editTask({
                taskId,
                task: {
                    taskId,
                    taskData: {
                        title: task?.taskData.title,
                        description: task?.taskData.description,
                        completed: !task.taskData.completed,
                    },
                },
            })
        );
    };

    const deleteThisTask = () => {
        dispatch(deleteTask(taskId));
        navigate("/tasks");
    };

    return (
        <PageLayout title={task.taskData.title}>
            <div className="my-5 min-h-[200px] border-2 border-transparent  border-b-slate-700">
                <p className="text-[18px] mb-3">{task?.taskData.description}</p>
            </div>

            <div>
                <button
                    onClick={setCompleted}
                    className={"p-2 bg-green-400 font-medium mr-2 mb-2 rounded"}
                >
                    Set as{" "}
                    {task?.taskData.completed ? "Incompleted" : "Completed"}
                </button>
                <button
                    onClick={() => {
                        navigate("/edit/" + taskId);
                    }}
                    className={
                        "p-2 bg-yellow-400 font-medium mr-2 mb-2 rounded"
                    }
                >
                    Edit task
                </button>
                <button
                    className="p-2 bg-red-500 font-medium mb-2 rounded"
                    onClick={() => setDeletePopup(true)}
                >
                    Delete task
                </button>
            </div>
            {deletePopup && (
                <Popup>
                    <h1 className="text-md mb-2">
                        Are you sure you want to delete this task?
                    </h1>
                    <hr />
                    <div className="mt-2 flex gap-2">
                        <button
                            className="px-2 py-1 bg-transparent border border-slate-400"
                            onClick={() => setDeletePopup(false)}
                        >
                            Cancel
                        </button>
                        <button
                            className="px-2 py-1 bg-red-300 rounded"
                            onClick={() => deleteThisTask()}
                        >
                            Delete
                        </button>
                    </div>
                </Popup>
            )}
        </PageLayout>
    );
};
