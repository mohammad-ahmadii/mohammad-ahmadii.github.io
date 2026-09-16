import { lazy } from "react";
import { createBrowserRouter, type RouteObject } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/home/HomePage";
import { ROUTES } from "../shared/config/routes";
import ContactPage from "@/pages/contact/ContactPage";

// Secondary routes are lazy so the home page stays the only initial chunk.
const ProjectsPage = lazy(() => import("../pages/projects/ProjectsPage"));
const NotFoundPage = lazy(() => import("../pages/not-found/NotFoundPage"));

export const routes: RouteObject[] = [
  {
    path: ROUTES.home,
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES.projects.slice(1), element: <ProjectsPage /> },
      { path: ROUTES.contact.slice(1), element: <ContactPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];

/**
 * basename is derived from the Vite base so the same router works on
 * localhost ("/") and on GitHub Pages ("/").
 */
export const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL,
});
