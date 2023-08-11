import React from "react";
import { useParams } from "react-router-dom";
import { PageLayout } from "../Components/PageLayout";
import { useSelector } from "react-redux";
import { TaskCard } from "../Components/TaskCard";
import IdeaCard from "../Components/IdeaCard";

const Search = () => {
    const { searchTerm } = useParams();
    const { tasks } = useSelector((state) => state.tasks);
    const { ideas } = useSelector((state) => state.ideas);
    const tasksToShow = Object.values(tasks).filter((task) =>
        task.taskData.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const ideasToShow = Object.values(ideas).filter((idea) =>
        idea.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(tasksToShow);
    return (
        <PageLayout title={"Search Results"}>
            <div className="w-full p-4 bg-slate-100 rounded">
                <h1 className="text-xl">Tasks</h1>
                <hr className="my-3" />
                {tasksToShow.length === 0 ? (
                    "You don't have any task for " + searchTerm + "."
                ) : (
                    <div>
                        {tasksToShow.map((task) => {
                            return <TaskCard task={task} />;
                        })}
                    </div>
                )}
            </div>
            <div className="w-full mt-5 p-4 bg-slate-100 rounded">
                <h1 className="text-xl">Ideas</h1>
                <hr className="my-3" />
                {ideasToShow.length === 0 ? (
                    "You don't have any idea for " + searchTerm + "."
                ) : (
                    <div>
                        {ideasToShow.map((idea) => {
                            return <IdeaCard small={true} idea={idea} />;
                        })}
                    </div>
                )}
            </div>
        </PageLayout>
    );
};

export default Search;
