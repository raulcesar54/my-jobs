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
        duration: .8
      }}
      className="flex flex-1 bg-primary max-w-3xl p-8 pt-8 flex-col text-center items-center justify-center overflow-hidden"
    >
      {hasData ? <JsonViewer /> : <Information />}
    </motion.div>
  );
};
