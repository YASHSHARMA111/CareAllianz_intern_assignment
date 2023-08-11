import { Button } from "./Button";

export const PageLayout = ({
    title,
    coloredTitle,
    children,
    leftHeaderElement,
}) => {
    return (
        <div className="p-5 md:p-10 w-full">
            <div className="mt-10 md:mt-5 flex items-center justify-between">
                <h1 className="text-slate-900 text-xl md:text-5xl font-medium">
                    {title}{" "}
                    <span className="text-gray-400">{coloredTitle}</span>
                </h1>
                {leftHeaderElement}
            </div>

            <hr className="my-2 md:my-5 border border-slate-700" />
            <div className="">{children}</div>
        </div>
    );
};
