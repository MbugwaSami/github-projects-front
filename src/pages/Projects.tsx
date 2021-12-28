import Projects from "../components/Projects";
import { useContext } from "react";
import AppContext from "../context";

const ProjectsPage = () => {
  const { projects, error } = useContext(AppContext);

  return (
    <div className="p-4">
      {projects?.length ? (
        <Projects />
      ) : (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <p className="fs-3">{error || "Search username to view projects"}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
