import { useState } from "react";
import { useSelector } from "react-redux";
import { TaskCard } from "../Components/TaskCard";
import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const { tasks } = useSelector((state) => state.tasks);
//   const [completedTab, setCompletedTab] = useState(true);
//   const tasksToShow = Object.values(tasks).filter(
//     (task) => task.taskData.completed !== completedTab
//   );
//   return (
//     <div className="p-5">
//       <div>
// <div className="flex gap-4 pb-2">
//   <button
//     onClick={() => setCompletedTab(true)}
//     className={`bg-transparent text-black ${
//       completedTab ? "font-bold" : ""
//     } focus:outline-none transition`}
//   >
//     Incompleted
//   </button>
//   <button
//     onClick={() => setCompletedTab(false)}
//     className={`bg-transparent text-black ${
//       !completedTab ? "font-bold" : ""
//     } focus:outline-none transition`}
//   >
//     Completed
//   </button>
// </div>
// <hr />
//       </div>
//       <div>
//         {tasksToShow.map((task, i) => (
//           <div key={i} className="mt-3">
//             <TaskCard task={task} />
//           </div>
//         ))}
// {tasksToShow.length === 0 && (
//   <p className="mt-3 text-center text-[17px] italic">
//     You don't have any {completedTab ? "incompleted" : "Completed"}{" "}
//     tasks
//   </p>
// )}
//       </div>
//     </div>
//   );
// };

// export default Home;

const Home = () => {
    const navigate = useNavigate();

    const buttons = [
        {
            title: "Create task",
            description: "Manage your task in best way",
            onClick: () => {
                navigate("/tasks");
            },
            background: "bg-orange-100",
        },
        {
            title: "Create Idea",
            description: "Store your all ideas.",
            onClick: () => {
                navigate("/ideas");
            },
            background: "bg-pink-200",
        },
        {
            title: "Create Contact",
            description: "Store and manage your contacts.",
            onClick: () => {
                navigate("/contacts");
            },
            background: "bg-yellow-200",
        },
    ];
    return (
        <div className="p-5 md:p-10 w-full">
            <h1 className="text-slate-900 text-xl mt-10 md:mt-5 md:text-5xl font-medium">
                Welcome <span className="text-gray-400">Here...</span>
            </h1>
            <hr className="my-2 md:my-5 border border-slate-700" />
            <div className="w-full mt-20 flex items-center gap-5 justify-center">
                {buttons.map((item) => (
                    <div
                        className={
                            "p-4 rounded-md cursor-pointer w-full " +
                            item.background
                        }
                        onClick={item.onClick}
                    >
                        <h1 className="font-medium text-slate-900 text-[20px]">
                            {item.title}
                        </h1>
                        <hr className="border-slate-500 my-4" />
                        <p className="text-[18px]">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
