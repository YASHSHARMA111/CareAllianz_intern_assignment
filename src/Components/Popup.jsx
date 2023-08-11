import React from "react";

const Popup = ({ children, backgroundClickFunction }) => {
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                background: "rgba(0,0,0,0.7)",
                position: "absolute",
                backdropFilter: "blur(2px)",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }}
            className="flex
    items-center justify-center"
            onClick={() => {
                backgroundClickFunction && backgroundClickFunction();
            }}
        >
            <div
                className="w-full mx-2
    max-w-2xl rounded p-6
    bg-white"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Popup;
