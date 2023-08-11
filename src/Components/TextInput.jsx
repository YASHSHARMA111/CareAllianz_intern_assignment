export const TextInput = ({
    value,
    setter,
    placeholder,
    className,
    extraProps,
}) => {
    return (
        <input
            value={value}
            onChange={(e) => setter(e.target.value)}
            placeholder={placeholder}
            className={
                "bg-white border w-full border-gray-500 rounded p-2 focus:outline-none px-2 " +
                className
            }
            required
            {...extraProps}
        />
    );
};
