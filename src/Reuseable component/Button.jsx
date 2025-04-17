import { Button as HeroButton } from "@heroui/react";
import React from "react";

// Reusable Button component with variants
function Buttons({
  variant = "primary",
  size = "sm",
  className = "",
  children,
  ...props
}) {
  const baseClass =
    "px-5 py-2 rounded-2xl font-medium transition-all duration-200";

  const variants = {
    primary: "bg-primary text-black hover:bg-cyan-300",
    outline:
      "border border-gray-300 text-gray-400 bg-transparent hover:bg-gray",
  };

  const finalClass = `${baseClass} ${variants[variant] || ""} ${className}`;

  return (
    <HeroButton className={finalClass} size={size} {...props}>
      {children}
    </HeroButton>
  );
}

export default Buttons;
