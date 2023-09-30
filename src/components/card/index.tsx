"use client";
export const Card: React.FC<any> = (props) => {
  const { children } = props;
  return (
    <div className="bg-primary p-6 flex-col items-center justify-center flex rounded-xl">
      {children}
    </div>
  );
};
