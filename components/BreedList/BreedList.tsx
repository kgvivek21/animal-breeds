import React from "react";
import DogsBreed from "@/components/Breed/Breed";

const BreedList = ({ dogsData }: { dogsData: string[] }) => {
  return (
    <div>
      {dogsData.length > 0 ? (
        <div className="flex justify-center gap-2 md:flex-row flex-wrap">
          {dogsData.map((dogs, index) => (
            <DogsBreed dogName={dogs} key={index} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default BreedList;
