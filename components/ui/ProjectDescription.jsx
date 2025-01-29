"use client";
import { Button } from "@/components/ui";
import { useState } from "react";

export default function ProjectDescription({
  projectTitle,
  description,
  buttonTitle,
  buttonLink,
}) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="grid content-center gap-5 md:col-span-3">
      <h3 className="text-xl font-semibold text-amber-500">{projectTitle}</h3>
      <div className="flex flex-col">
        <span
          className={`text-lg text-neutral-300 overflow-hidden transition-[max-height] duration-1000 ease-in-out ${
            showMore
              ? "max-h-96"
              : "max-h-24 overflow-hidden text-ellipsis line-clamp-3"
          }`}
        >
          {description}
        </span>
        <span className="text-amber-500 text-start hover:text-amber-600 transition-colors duration-300">
          <button onClick={() => setShowMore(!showMore)} className="underline">
            {showMore ? "Show less" : "Show more"}
          </button>
          ...
        </span>
      </div>
      {buttonTitle && buttonLink ? (
        <div className="flex flex-wrap gap-4 w-full text-right text-base font-semibold">
          <Button title={buttonTitle} link={buttonLink}></Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
