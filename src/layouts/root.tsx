import { Outlet } from "react-router-dom";
import { NavbarWidget } from "@widgets";

export default function RootLayout() {
  return (
    <div className="min-h-screen text-white">
      <NavbarWidget />
      <main className="mx-auto max-w-7xl p-6">
        <Outlet />
      </main>
    </div>
  );
}
