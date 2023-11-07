import { ReactNode } from "react";

const Card = ({ children }: CardProps) => {
  return (
    <div className="rounded-md border border-stroke shadow-default bg-white p-4 shadow-sm">
      {children}
    </div>
  );
};

interface CardProps {
  children: ReactNode;
}

export default Card;
