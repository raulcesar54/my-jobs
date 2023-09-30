//#region imports
"use client";
import { FileText } from "@/assets/icons";
import { Button, Card } from "@/components";
import { useFile } from "@/hooks/useFile";
import { String } from "@/strings";
import { motion } from "framer-motion";
//#endregion

export const ImportFile = () => {
  const { CARD } = String;
  const { handleOpenFile } = useFile();

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-[334px]"
    >
      <Card>
        <FileText />
        <h1 className="font-semibold w-full text-text-white text-[23px] text-center mb-1 mt-4">
          {CARD.DESCRIPTION}
        </h1>
        <small className="font text-text-white/60 text-sm">
          {CARD.MESSAGE}
        </small>
        <div className="mt-[48px] mb-2 w-full">
          <Button
            label={CARD.IMPORT}
            variant="PRIMARY"
            onPress={handleOpenFile}
          />
        </div>
      </Card>
    </motion.div>
  );
};
