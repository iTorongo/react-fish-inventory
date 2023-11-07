export const Badge = ({
  bgColor = "green",
  textColor = "green",
  text,
  className,
}: BadgeProps) => {
  return (
    <span
      className={`bg-${bgColor}-100 text-${textColor}-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full  border border-${textColor}-400 ${className}`}
    >
      {text}
    </span>
  );
};

interface BadgeProps {
  bgColor: string;
  textColor: string;
  text: string;
  className?: string;
}
