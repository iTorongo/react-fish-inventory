import React, { MouseEventHandler } from "react";

export const Button = ({ onClick, label, variant }: ButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-blue-500 text-white hover:bg-blue-700";
      case "secondary":
        return "bg-gray-500 text-white hover:bg-gray-700";
      default:
        return "bg-gray-500 text-white hover:bg-gray-700";
    }
  };

  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded ${getVariantStyles()}`}
    >
      {label}
    </button>
  );
};

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  label: string;
  variant?: "primary" | "secondary";
}
