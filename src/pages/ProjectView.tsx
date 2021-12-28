import ProjectView from "../components/ProjectView";
import { useContext } from "react";
import AppContext from "../context";

const ProjectsPage = () => {
  const {  error } = useContext(AppContext);

  return (
    <div className="p-4">
      {error ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <p className="fs-3">{error}</p>
        </div>
      ) : (
        <ProjectView />
      )}
    </div>
  );
};

export default ProjectsPage;
