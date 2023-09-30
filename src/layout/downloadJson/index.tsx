import { DownloadIcon } from "@/assets/icons";
import { DownloadJsonProps } from "./props";
import { motion } from "framer-motion";

export const DownloadJson: React.FC<DownloadJsonProps> = (props) => {
  const { handleExportJson, isDisabled } = props;
  const disabledStyled = "bg-text-disabled pointer-events-none";
  return (
    <motion.div
      initial={{ y: 50 }}
      transition={{ delay: 0.9 }}
      className={`bg-primary p-8 rounded-xl px-10 flex flex-row items-center justify-center cursor-pointer gap-8 hover:bg-[#57099E] mb-11 -mt-6 max-w-[350px] ${
        !isDisabled && disabledStyled
      }`}
      onClick={handleExportJson}
    >
      <DownloadIcon />
      <div className="flex flex-col">
        <h1 className="text-text-white font-bold text-[24px]">Baixar OS</h1>
        <h1 className="text-text-white font-light">Baixar arquivo .JSON</h1>
      </div>
    </motion.div>
  );
};
