import { Outlet } from "react-router-dom";
import { Header } from "../../molecules";

export const DefaultLayout = () => {
  return (
    <div className="flex h-screen">
      <main className="flex-1 overflow-hidden">
        <Header />
        <section className="p-4">
          <Outlet />
        </section>
      </main>
    </div>
  );
};
