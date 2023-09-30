"use client";
import { TitleProps } from "./props";
import { QuoteIcon } from "@/assets/icons";
import { TESTS } from "@/strings";
import { motion } from "framer-motion";

export const Title: React.FC<TitleProps> = (props) => {
  const { subtitle, title, strongTitle } = props;
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.4 }}
      className="max-w-[400px] gap-4"
      data-testid={TESTS.TITLE}
    >
      <QuoteIcon />
      <div className="mt-2">
        <small className="text-text-disabled text-sm">{subtitle}</small>
        <h1 className="text-text-main font-semibold text-4xl	">
          {title}{" "}
          {strongTitle && (
            <strong className="text-primary">{strongTitle}</strong>
          )}
        </h1>
      </div>
    </motion.div>
  );
};
