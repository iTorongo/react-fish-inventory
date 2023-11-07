import { NavLink } from "react-router-dom";
import { Avatar, Button, SearchBar } from "../../atoms";
import { useTranslation } from "react-i18next";

export const Header = ({ isAuthenticated }: HeaderProps) => {
  const { t } = useTranslation("common");
  return (
    <header className="p-3 flex border-b items-center justify-between">
      {isAuthenticated ? (
        <>
          <SearchBar />
          <Avatar initials="JD" bgColor="blue" />
        </>
      ) : (
        <>
          <NavLink to="/" className="text-xl text-bold font-bold">
            {t("brandName")}
          </NavLink>
          <NavLink to="/login">
            <Button label="Login" variant="primary" />
          </NavLink>
        </>
      )}
    </header>
  );
};

interface HeaderProps {
  isAuthenticated?: boolean;
}
