export const TextArea = ({ value, setter, placeholder, extraProps }) => {
    return (
        <textarea
            value={value}
            placeholder={placeholder}
            rows={6}
            className="bg-slate-100 w-full border border-gray-500 rounded p-2 focus:outline-none px-2"
            onChange={(e) => setter(e.target.value)}
            required
            {...extraProps}
        />
    );
};
