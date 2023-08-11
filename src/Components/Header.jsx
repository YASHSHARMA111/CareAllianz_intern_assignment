import { useState } from "react";
import { HeaderLink } from "./HeaderLink";
import { TextInput } from "./TextInput";
import {
    AiFillHome,
    AiOutlineUnorderedList,
    AiTwotoneBulb,
    AiTwotonePhone,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const links = [
        {
            title: "Home",
            path: "/",
            icon: AiFillHome,
            tooltipContent: null,
        },
        {
            title: "Tasks",
            path: "/tasks",
            icon: AiOutlineUnorderedList,
            tooltipContent: "Manage your task here...",
        },
        {
            title: "Ideas",
            path: "/ideas",
            icon: AiTwotoneBulb,
            tooltipContent: "Manage your ideas here...",
        },
        {
            title: "Contacts",
            path: "/contacts",
            icon: AiTwotonePhone,
            tooltipContent: "Manage your contacts here...",
        },
    ];
    return (
        <div className="bg-transparent w-full p-4 flex h-screen max-w-[400px]">
            <div className="w-full bg-gray-100 m-auto rounded-lg h-full text-white p-6">
                <h1 className="text-slate-800 text-2xl font-bold">Task App</h1>
                <TextInput
                    value={search}
                    setter={(value) => setSearch(value)}
                    placeholder={"Search here..."}
                    className={"mt-3 text-black"}
                    extraProps={{
                        onKeyDown: (e) => {
                            if (e.keyCode === 13) {
                                navigate("/search/" + search);
                            }
                        },
                    }}
                />
                <hr className="border-gray-400 my-4" />
                <div className="flex flex-col gap-4">
                    {links.map((link, i) => (
                        <HeaderLink key={i} {...link} />
                    ))}
                </div>
            </div>
        </div>
    );
};
