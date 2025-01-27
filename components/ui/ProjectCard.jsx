import Image from "next/image";
import { LoadingSpinner } from "@/components/ui";
import { Suspense } from "react";

export default function ProjectCard({ image, children, date, customClass }) {
  return (
    <div className={`p-5 py-5 bg-gray-50 bg-opacity-5 border border-amber-500 border-opacity-25 rounded-lg shadow-lg md:min-w-[30rem] md:col-span-2 ${customClass}`}>
      <div className="flex flex-col gap-3 max-w-xs m-auto">
        <span className="text-amber-500 italic text-opacity-70">
          {date}
        </span>
        <Suspense fallback={<LoadingSpinner />}>
          <Image
            src={image}
            alt="Project Image"
            className="rounded-md m-auto w-[20rem] h-[13rem] shadow-lg"
          />
          </Suspense>
        <div className="flex flex-wrap gap-2 w-full justify-end text-2xl text-amber-500">
          {children}
        </div>
      </div>
    </div>
  );
}
