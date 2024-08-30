import { capitaliseFirstLetter } from "@/utils/utils";
import Link from "next/link";
import React from "react";

const DogsBreed = ({ dogName }: { dogName: string }) => {
  return (
    <Link
      className="bg-primary text-accent border hover:bg-secondary rounded-lg h-10 flex justify-center items-center min-w-max"
      key={dogName}
      href={`/breed-details/${dogName}`}
    >
      {capitaliseFirstLetter(dogName)}
    </Link>
  );
};

export default DogsBreed;
