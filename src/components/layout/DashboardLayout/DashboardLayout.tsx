import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../../molecules";

export const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-hidden">
        <Header isAuthenticated />
        <section className="p-4 bg-slate-100 h-screen">
          <Outlet />
        </section>
      </main>
    </div>
  );
};
