export const Typography = ({
  variant = "body",
  className = "",
  children,
}: TypographyProps) => {
  let Component: React.ElementType = "p";

  switch (variant) {
    case "heading":
      Component = "h1";
      break;
    case "subheading":
      Component = "h2";
      break;
    default:
      Component = "p";
      break;
  }

  return (
    <Component className={`text-gray-800 dark:text-white ${className}`}>
      {children}
    </Component>
  );
};

interface TypographyProps {
  variant?: "heading" | "subheading" | "body";
  className?: string;
  children: React.ReactNode;
}
