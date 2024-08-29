import Link from "next/link";
import React from "react";

const DogsBreed = ({ dogName }: { dogName: string }) => {
  const capitaliseFirstLetter = (name: string) => {
    if (!name) return "";
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  return (
    <a
      className="bg-slate-100 border border-black rounded h-10 flex justify-center min-w-max"
      key={dogName}
      href={`/breed-details/${dogName}`}
    >
      {/* <img
        src={`https://images.dog.ceo/breeds/${dogName}/n02088094_1003.jpg`}
      ></img> */}
      {capitaliseFirstLetter(dogName)}
    </a>
  );
};

export default DogsBreed;
