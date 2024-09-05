import { capitaliseFirstLetter } from "@/utils/utils";
import Link from "next/link";
import React from "react";

const DogsBreed = ({ dogName }: { dogName: string }) => {
  return (
    <Link
      className="bg-card text-accent-card border hover:bg-primary-dark hover:text-white rounded-lg h-[150px] flex flex-col justify-center max-w-[300px] p-4 gap-2 group"
      key={dogName}
      href={`/breed-details/${dogName}`}
    >
      {capitaliseFirstLetter(dogName)}
      <div className="border border-grey min-w-full rounded-full"></div>
      <p role="dogDesc" className="line-clamp-3 text-justify text-ellipsis">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitat,
        inventore laudantium accusamus iusto voluptate debitis sequi voluptatum
        doloribus reprehenderit at ad molestiae quasi officia eum, esse aliquid
        nihil aspernatur voluptas! Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Ipsa, dolores quis distinctio ullam quidem voluptas a?
        Ipsa expedita exercitationem placeat recusandae modi, ducimus,
        praesentium, inventore aut perferendis omnis mollitia accusantium.
      </p>
    </Link>
  );
};

export default DogsBreed;
