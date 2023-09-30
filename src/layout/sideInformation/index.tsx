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
        hasData && "py-3 lg:py-0"
      } flex flex-1 bg-primary lg:max-w-3xl lg:p-8 lg:pt-8 flex-col text-center items-center justify-center lg:overflow-hidden lg:mt-0`}
    >
      {hasData ? <JsonViewer /> : <Information />}
    </motion.div>
  );
};
