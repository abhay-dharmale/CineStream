import React from "react";

const Dropdown = ({ title, options, func }) => {
  return (
    <div className="select h-[2.5em] w-[13em] md:h-[2.5em] md:w-[15em] mt-5 lg:mt-0">
      <select
        className=""
        default="0"
        name="format"
        id="format"
        onChange={func}
      >
        <option className="">{title}</option>
        {options.map((option, index) => (
          <option className="" key={index} value={option}>
            {option.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
