import { capitaliseFirstLetter } from "@/utils/utils";
import Image from "next/image";

import React from "react";

const getDogDesc = async (dogName: string) => {
  const name = dogName.includes("-") ? dogName.split("-")[1] : dogName;

  const res = await fetch(`http://localhost:3000/api/dogDesc?name=${name}`);

  const response = await res.json();
  const dataResponse = response.message;
  const dataArray = dataResponse.filter((name: string) => {
    const dog = dogName.includes("-") ? dogName.split("-")[0] : dogName;
    return name.includes(dog);
  });

  return dataArray;
};

const DogDetail = async ({ params }: { params: { slug: string } }) => {
  const decodedDogName = decodeURIComponent(params.slug);
  const dogDesc = await getDogDesc(decodedDogName.split(" ").join("-"));

  return (
    <div className="m-4">
      <label className="flex text-lg font-bold justify-center">
        {capitaliseFirstLetter(decodedDogName)}
      </label>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitat,
        inventore laudantium accusamus iusto voluptate debitis sequi voluptatum
        doloribus reprehenderit at ad molestiae quasi officia eum, esse aliquid
        nihil aspernatur voluptas! Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Ipsa, dolores quis distinctio ullam quidem voluptas a?
        Ipsa expedita exercitationem placeat recusandae modi, ducimus,
        praesentium, inventore aut perferendis omnis mollitia accusantium.
      </p>
      <div className="flex flex-wrap gap-2 justify-center m-4">
        {dogDesc.length > 0
          ? dogDesc?.map((dog: string, index: number) => (
              <Image
                src={dog}
                alt="name"
                width={100}
                height={100}
                key={index}
              ></Image>
            ))
          : "Loading"}
      </div>
    </div>
  );
};

export default DogDetail;
