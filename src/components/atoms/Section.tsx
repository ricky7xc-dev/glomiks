import React from "react";

interface ISectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "gray" | "blue" | "red";
  padding?: "sm" | "md" | "lg" | "xl";
}

const Section: React.FC<ISectionProps> = ({
  children,
  className = "",
  background = "white",
  padding = "lg",
}) => {
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    blue: "bg-blue-50",
    red: "bg-[#e21e26]",
  };

  const paddingClasses = {
    sm: "py-8",
    md: "py-12",
    lg: "py-16",
    xl: "py-20",
  };

  return (
    <section
      className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
