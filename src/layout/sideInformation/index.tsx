//#region
"use client";
import { useFile } from "@/hooks/useFile";
import { Information } from "../informations";
import { JsonViewer } from "../jsonViewer";
import { motion } from "framer-motion";
//#endregion

export const SideInformation = () => {
  const { hasData } = useFile();

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
      }}
      className={`py-[200px] ${
        hasData && "py-3 mb:py-0"
      } flex flex-1 bg-primary md:max-w-3xl md:p-8 md:pt-8 flex-col text-center items-center justify-center md:overflow-hidden md:mt-0`}
    >
      {hasData ? <JsonViewer /> : <Information />}
    </motion.div>
  );
};
