import React from "react";
import DogsBreed from "@/components/Breed/Breed";

const BreedList = ({ dogsData }: { dogsData: string[] }) => {
  return (
    <div>
      {dogsData.length > 0 ? (
        <div className="flex flex-col gap-2">
          {dogsData.map((dogs, index) => (
            <DogsBreed dogName={dogs} key={index} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default BreedList;
