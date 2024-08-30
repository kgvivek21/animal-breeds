import React from "react";

const SearchBreed = ({
  inputHandler,
}: {
  inputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex h-full items-center border border-black p-3 gap-1 rounded-md">
      <div className={`flex h-full mr-1 w-5 items-center`}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M11 3.75a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5Zm6.7 12.88a8.75 8.75 0 1 0-1.06 1.06l3.83 3.84a.75.75 0 1 0 1.06-1.06l-3.84-3.84Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <input
        type="text"
        onChange={inputHandler}
        className="w-full py-0 pl-1 pr-3 border-none focus:outline-none"
        placeholder="Search by Dog name"
      />
    </div>
  );
};

export default SearchBreed;
