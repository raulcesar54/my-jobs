"use client";
import { TitleProps } from "./props";
import { QuoteIcon } from "@/assets/icons";

export const Title: React.FC<TitleProps> = (props) => {
  const { subtitle, title, strongTitle } = props;
  return (
    <div className="max-w-[400px] gap-4">
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
    </div>
  );
};
