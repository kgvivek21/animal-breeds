"use client";

import React, { useEffect, useState } from "react";
import SearchBreed from "../SearchBreed/SearchBreed";
import BreedList from "../BreedList/BreedList";
import Pagination from "../Pagination/Pagination";

const DogsBreedList = ({ dogsBreed }: { dogsBreed: string[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = dogsBreed.filter((dogs) =>
    dogs.includes(searchQuery.toLocaleLowerCase())
  );

  const totalPage = Math.ceil(filteredData.length / 9);

  const startIndex = (currentPage - 1) * 9;
  const endIndex = startIndex + 9;
  const currentPageData = filteredData.slice(startIndex, endIndex);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  useEffect(() => {
    console.log(currentPage, dogsBreed);
  }, []);

  const handleClick = (btnName: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    switch (btnName) {
      case "First":
        setCurrentPage(1);
        break;
      case "Previous":
        setCurrentPage((prev) => Math.max(prev - 1, 1));
        break;
      case "Next":
        setCurrentPage((prev) => Math.min(prev + 1, totalPage));
        break;
      case "Last":
        setCurrentPage(totalPage);
        break;
    }
  };
  //zustand - state management

  return (
    <>
      <div className="flex flex-col gap-3 min-w-full">
        <SearchBreed inputHandler={inputHandler} />
        <BreedList dogsData={currentPageData} />
        <Pagination
          clickEvent={handleClick}
          currentPage={currentPage}
          currentPageData={currentPageData}
          totalPage={totalPage}
        />
      </div>
    </>
  );
};

export default DogsBreedList;
