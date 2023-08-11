export const Button = ({ type, title, onClick }) => {
    console.log(onClick);
    return (
        <button
            className="bg-black p-2 border border-transparent text-white focus:outline-none hover:bg-transparent hover:border-black hover:text-black transition"
            type={type}
            onClick={onClick ? onClick : () => null}
        >
            {title}
        </button>
    );
};
