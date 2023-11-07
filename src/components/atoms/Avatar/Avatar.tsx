export const Avatar = ({
  src,
  initials,
  bgColor = "gray",
  className = "",
}: AvatarProps) => {
  const hasImage = src && src.length > 0;

  return (
    <>
      {hasImage ? (
        <div
          className={`m-1 mr-2 w-10 h-10 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white ${className}`}
        >
          <img
            src={src ?? "http://source.unsplash.com/100x100/?girl"}
            className="rounded-full"
          />
        </div>
      ) : (
        <div
          className={`m-1 mr-2 w-10 h-10 relative flex justify-center items-center rounded-full bg-${bgColor}-500 text-xl text-white uppercase ${className}`}
        >
          {initials}
        </div>
      )}
    </>
  );
};

interface AvatarProps {
  src?: string;
  initials?: string;
  className?: string;
  bgColor?: string;
}
