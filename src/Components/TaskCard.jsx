import { useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";

export const TaskCard = ({ task }) => {
  const navigate = useNavigate();
  return (
    <Fade up>
      <div
        className={
          task.taskData.completed
            ? "w-full rounded-lg cursor-pointer bg-green-400 p-4"
            : "w-full rounded-lg cursor-pointer bg-yellow-200 p-4"
        }
        onClick={() => navigate("/task/" + task.taskId)}
      >
        <h1
          className="font-bold capitalize text-md
      border border-transparent border-b-black
      pb-1
      "
        >
          {task.taskData.title}
        </h1>
        <div className="mt-2 text-gray-700">
          {task.taskData.description.slice(0, 10)}...
        </div>
      </div>
    </Fade>
  );
};
