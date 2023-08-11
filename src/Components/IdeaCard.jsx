import React, { useState } from "react";
import Popup from "./Popup";
import { Button } from "./Button";
import { useDispatch } from "react-redux";
import { removeIdea } from "../State/slice/ideaSlice";

const IdeaCard = ({ idea, small }) => {
    const [popup, setPopup] = useState(false);
    const dispatch = useDispatch();

    const deleteMe = () => {
        dispatch(removeIdea({ id: idea.ideaId }));
        setPopup(false);
    };
    return (
        <>
            <div
                className={`w-full h-[100px] rounded flex items-center justify-center italic text-lg md:h-[200px] ${
                    idea.color
                } ${small ? "max-h-[60px] max-w-[200px]" : ""}`}
                onClick={() => setPopup(true)}
            >
                {small ? idea.title.slice(0, 10) : idea.title}
            </div>
            {popup && (
                <Popup backgroundClickFunction={() => setPopup(false)}>
                    <div className="w-full flex flex-col items-center justify-center">
                        <p className="text-[18px] mb-2">{idea.title}</p>
                        <hr className="w-full mb-2" />
                        <Button
                            title={"Delete this idea"}
                            onClick={deleteMe}
                        ></Button>
                    </div>
                </Popup>
            )}
        </>
    );
};

export default IdeaCard;
