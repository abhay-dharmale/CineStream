const Dropdown = ({ title, options, func, value }) => {
  return (
    <div className="select h-[2.5em] w-[13em] md:h-[2.5em] md:w-[8em] mt-5 md:mt-0 lg:mt-0">
      <select
        aria-label="Dropdown Selector"
        className="border rounded px-2 py-1"
        onChange={func}
        value={value} // Controlled by the parent state
      >
        <option value="" disabled>
          {title}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option.replace(/_/g, " ").toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Dropdown;
