import React from "react";
import { ICardProps } from "@/types";

const Card: React.FC<ICardProps> = ({
  children,
  className = "",
  hoverable = false,
}) => {
  const baseClasses = "bg-white rounded-lg shadow-md overflow-hidden";
  const hoverClasses = hoverable
    ? "hover:shadow-lg transition-shadow duration-300"
    : "";

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
