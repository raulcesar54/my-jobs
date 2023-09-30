"use client";
import { useFile } from "@/hooks/useFile";
import { Information } from "../informations";
import { JsonViewer } from "../jsonViewer";

export const SideInformation = () => {
  const { hasData } = useFile();

  return (
    <div className="flex flex-1 bg-primary max-w-3xl p-8 pt-8 flex-col text-center items-center justify-center overflow-hidden">
      {hasData ? <JsonViewer /> : <Information />}
    </div>
  );
};
