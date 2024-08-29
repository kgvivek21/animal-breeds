"use client";
import React, { useState } from "react";
import DogsBreed from "../DogsBreed/DogsBreed";

const DogsBreedList = ({ dogsBreed }: { dogsBreed: string[] }) => {
  const [dogsList, setDogsList] = useState(dogsBreed);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const totalPage = Math.ceil(dogsBreed.length / 9);

  const filteredData = dogsList.filter((dogs) =>
    dogs.includes(searchQuery.toLocaleLowerCase())
  );

  const startIndex = (currentPage - 1) * 9;
  const endIndex = startIndex + 9;
  const currentPageData = filteredData.slice(startIndex, endIndex);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <label className="flex text-3xl font-extrabold justify-center mb-3">
        List of Dog Breeds
      </label>
      <div className="flex flex-col gap-3 min-w-full md:min-w-max">
        <input
          type="text"
          className="border border-black"
          onChange={inputHandler}
        />
        {currentPageData.length > 0 ? (
          <div className="flex flex-col gap-2">
            {currentPageData.map((dogs, index) => (
              <DogsBreed dogName={dogs} key={index} />
            ))}
          </div>
        ) : null}
        {dogsList.length > 0 ? (
          <div className="flex gap-1 justify-center">
            <button
              type="button"
              className="button-style"
              disabled={currentPage === 1}
              onClick={() => {
                setCurrentPage(1);
              }}
            >
              First
            </button>
            <button
              type="button"
              className="button-style"
              disabled={currentPage === 1}
              onClick={() => {
                setCurrentPage((prev) => Math.max(prev - 1, 1));
              }}
            >
              Previous
            </button>
            <button
              type="button"
              className="button-style"
              disabled={currentPage === totalPage}
              onClick={() => {
                setCurrentPage((prev) => Math.min(prev + 1, totalPage));
              }}
            >
              Next
            </button>
            <button
              type="button"
              className="button-style"
              disabled={currentPage === totalPage}
              onClick={() => {
                setCurrentPage(totalPage);
              }}
            >
              Last
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default DogsBreedList;
