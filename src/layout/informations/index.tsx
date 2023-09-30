"use client";
import { PackageIcon } from "@/assets/icons";
import { String } from "@/strings";

export const Information = () => {
  const { SIDE_INFORMATION } = String;

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="animate-bounce">
        <PackageIcon />
      </div>
      <h1 className="text-3xl text-text-white font-bold mt-11 max-w-sm">
        {SIDE_INFORMATION.TITLE}
      </h1>
      <h2 className="mt-4 text-text-white font-thin max-w-md ">
        {SIDE_INFORMATION.SUBTITLE}
      </h2>
    </div>
  );
};
