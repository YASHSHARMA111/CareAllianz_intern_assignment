import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Components/Button";
import { PageLayout } from "../Components/PageLayout";
import IdeaCard from "../Components/IdeaCard";
import Popup from "../Components/Popup";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { TextArea } from "../Components/TextArea";
import { addIdea } from "../State/slice/ideaSlice";

export const Ideas = () => {
    const { ideas } = useSelector((state) => state.ideas);
    const dispatch = useDispatch();
    const [popup, setPopup] = useState(false);
    const [ideaTitle, setIdeaTitle] = useState("");
    const [color, setColor] = useState("bg-red-300");

    const onSubmit = (e) => {
        e.preventDefault();
        const id = uuid();
        dispatch(
            addIdea({
                id,
                idea: {
                    ideaId: id,
                    title: ideaTitle,
                    color,
                },
            })
        );
        setPopup(false);
    };

    const setTheColor = (value) => {
        setColor(value);
    };

    return (
        <PageLayout
            title={"Your"}
            coloredTitle={"Ideas"}
            leftHeaderElement={
                <Button
                    title={"Add your ideas"}
                    onClick={() => setPopup(true)}
                ></Button>
            }
        >
            <div className="grid grid-cols-2 mt-4 gap-3 md:grid-cols-4">
                {Object.values(ideas).map((idea) => (
                    <IdeaCard idea={idea} />
                ))}
            </div>
            <div>
                {Object.values(ideas).length === 0 && (
                    <p className="text-xl text-center italic my-5">
                        You don't have any...
                    </p>
                )}
            </div>
            {popup && (
                <Popup backgroundClickFunction={() => setPopup(false)}>
                    <form
                        onSubmit={onSubmit}
                        className="flex flex-col items-center"
                    >
                        <h1 className="text-lg font-bold text-center mb-4">
                            Add Some Idea
                        </h1>
                        <TextArea
                            value={ideaTitle}
                            placeholder={"Enter your idea here..."}
                            setter={(value) => setIdeaTitle(value)}
                            extraProps={{ min: 0, max: 80 }}
                        />
                        <div className="w-full my-3">
                            <p className="text-md font-medium mb-">
                                Select a color
                            </p>
                            <div className="flex gap-2 mt-2">
                                <div
                                    className={`bg-red-300 w-[40px] cursor-pointer h-[40px] border-2 ${
                                        color !== "bg-red-300"
                                            ? "border-transparent"
                                            : "border-slate-600"
                                    } `}
                                    onClick={() => setTheColor("bg-red-300")}
                                ></div>
                                <div
                                    className={`bg-yellow-200 w-[40px] cursor-pointer h-[40px] border-2 ${
                                        color !== "bg-yellow-200"
                                            ? "border-transparent"
                                            : "border-slate-600"
                                    } `}
                                    onClick={() => setTheColor("bg-yellow-200")}
                                ></div>
                                <div
                                    className={`bg-pink-200 w-[40px] cursor-pointer h-[40px] border-2 ${
                                        color !== "bg-pink-200"
                                            ? "border-transparent"
                                            : "border-slate-600"
                                    } `}
                                    onClick={() => setTheColor("bg-pink-200")}
                                ></div>
                                <div
                                    className={`bg-gray-200 w-[40px] cursor-pointer h-[40px] border-2 ${
                                        color !== "bg-gray-200"
                                            ? "border-transparent"
                                            : "border-slate-600"
                                    } `}
                                    onClick={() => setTheColor("bg-gray-200")}
                                ></div>
                                <div
                                    className={`bg-green-200 w-[40px] cursor-pointer h-[40px] border-2 ${
                                        color !== "bg-green-200"
                                            ? "border-transparent"
                                            : "border-slate-600"
                                    } `}
                                    onClick={() => setTheColor("bg-green-200")}
                                ></div>
                            </div>
                        </div>

                        <Button title={"Add you idea"} type={"submit"}></Button>
                    </form>
                </Popup>
            )}
        </PageLayout>
    );
};
