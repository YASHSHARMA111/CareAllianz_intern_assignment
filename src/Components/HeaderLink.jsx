import { useLocation, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";

export const HeaderLink = ({ title, path, icon: Icon, tooltipContent }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const onClick = () => {
        navigate(path);
    };
    return (
        <>
            <div
                className={`p-2 rounded text-black ${
                    location.pathname === path && "text-white bg-gray-900"
                }  text-lg cursor-pointer flex items-center gap-4 hover:text-white hover:bg-gray-900 transition duration-300`}
                onClick={onClick}
                data-tooltip-id={title}
                data-tooltip-content={tooltipContent}
            >
                <Icon />
                <p>{title}</p>
            </div>
            {tooltipContent && <Tooltip id={title} place="bottom"></Tooltip>}
        </>
    );
};
