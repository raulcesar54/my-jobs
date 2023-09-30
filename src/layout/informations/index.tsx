//#region
"use client";
import { PackageIcon } from "@/assets/icons";
import { String } from "@/strings";
import { motion } from "framer-motion";
//#endregion

export const Information = () => {
  const { SIDE_INFORMATION } = String;

  return (
    <motion.div className="flex justify-center items-center flex-col">
      <motion.div
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{
          duration: 4,
          delay: 20,
        }}
        className="animate-bounce"
      >
        <PackageIcon />
      </motion.div>
      <h1 className="text-3xl text-text-white font-bold mt-11 max-w-sm">
        {SIDE_INFORMATION.TITLE}
      </h1>
      <h2 className="mt-4 text-text-white font-thin max-w-md ">
        {SIDE_INFORMATION.SUBTITLE}
      </h2>
    </motion.div>
  );
};
