"use client";

import { TESTS } from "@/strings";

export const Card: React.FC<any> = (props) => {
  const { children } = props;
  return (
    <div
      data-testid={TESTS.CARD}
      className="bg-primary p-6 flex-col items-center justify-center flex rounded-xl"
    >
      {children}
    </div>
  );
};
