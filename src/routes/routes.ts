import Projects from "../pages/Projects";
import ProjectView from "../pages/ProjectView";

export const routes = [
  {
    path: "/",
    element: Projects,
  },
  {
    path: "/:projectName",
    element: ProjectView,
  },
];
