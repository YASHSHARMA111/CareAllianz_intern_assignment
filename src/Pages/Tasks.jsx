import { useSelector } from "react-redux";
import { PageLayout } from "../Components/PageLayout";
import { TaskCard } from "../Components/TaskCard";
import { Button } from "../Components/Button";
import { useState } from "react";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router-dom";

export const Tasks = () => {
    const { tasks } = useSelector((state) => state.tasks);
    const [completedTab, setCompletedTab] = useState(true);
    const tasksToShow = Object.values(tasks).filter(
        (task) => task.taskData.completed !== completedTab
    );
    const navigate = useNavigate();
    return (
        <PageLayout
            title={"Your"}
            coloredTitle={"Tasks"}
            leftHeaderElement={
                <Button
                    title={"Add Your Task"}
                    onClick={() => navigate("/add")}
                ></Button>
            }
        >
            <div className="flex gap-4 pb-2 mb-2">
                <button
                    onClick={() => setCompletedTab(true)}
                    className={`bg-transparent text-black ${
                        completedTab ? "font-bold" : ""
                    } focus:outline-none transition`}
                    data-tooltip-id="incompleted"
                    data-tooltip-content={"See your incompleted tasks"}
                >
                    Incompleted
                </button>
                <Tooltip
                    style={{
                        zIndex: 1000,
                    }}
                    id="incompleted"
                    place="bottom"
                ></Tooltip>
                <button
                    onClick={() => setCompletedTab(false)}
                    className={`bg-transparent text-black ${
                        !completedTab ? "font-bold" : ""
                    } focus:outline-none transition`}
                    data-tooltip-id="completed"
                    data-tooltip-content={"See your completed tasks"}
                >
                    Completed
                </button>
                <Tooltip
                    style={{
                        zIndex: 1000,
                    }}
                    id="completed"
                    place="bottom"
                ></Tooltip>
            </div>
            <hr className="mb-4 border border-slate-800" />

            {tasksToShow.map((task) => (
                <div className="my-3">
                    <TaskCard task={task} />
                </div>
            ))}

            {tasksToShow.length === 0 && (
                <p className="mt-8 text-center text-[17px] italic">
                    You don't have any{" "}
                    {completedTab ? "incompleted" : "Completed"} tasks
                </p>
            )}
        </PageLayout>
    );
};
