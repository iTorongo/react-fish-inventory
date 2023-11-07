import { useTranslation } from "react-i18next";
import { dashboardRoutes } from "../../../routes";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const { t } = useTranslation("common");
  return (
    <aside className="w-64 p-4 border-r-2 border-gray-100">
      <NavLink
        to="/"
        className="flex items-center text-black mb-12 text-xl text-bold font-bold"
      >
        {t("brandName")}
      </NavLink>
      <ul className="space-y-1">
        {dashboardRoutes?.map((route) => {
          return (
            <li key={`${route.path}}`}>
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  "flex items-center p-2 rounded-md  duration-300 ease-in-out hover:bg-slate-100" +
                  (isActive && " bg-slate-100 text-black")
                }
              >
                {route.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
