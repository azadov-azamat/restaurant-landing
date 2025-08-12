import { lazy } from "react";
import {
  createBrowserRouter,
//   RouterProvider,
} from "react-router-dom";
import RootLayout from "@layouts/root";
// import DashboardLayout from "@layouts/dashboard";
import { ROUTES } from "./routes";
// import { RequireAuth } from "./guards";

const Home = lazy(() => import("@pages/home"));
const About = lazy(() => import("@pages/about"));

function ErrorPage() {
  return <div className="text-red-400">Something went wrong.</div>;
}

// const isAuthed = () => !!localStorage.getItem("token"); // real loyihada context/RTK query ishlating

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: ROUTES.about, element: <About /> },
    //   { path: ROUTES.login, element: <Login /> },

    //   {
    //     path: ROUTES.dashboard,
    //     element: (
    //       <RequireAuth isAuthed={isAuthed()}>
    //         <DashboardLayout />
    //       </RequireAuth>
    //     ),
    //     children: [
    //       { index: true, element: <DashIndex /> },
    //       { path: "users", element: <DashUsers /> },
    //       { path: "settings", element: <DashSettings /> },
    //     ],
    //   },

      { path: "*", element: <div>404 — Not Found</div> },
    ],
  },
]);
