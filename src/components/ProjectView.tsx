import { useContext, MouseEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import AppContext from "../context";
import { getData } from "../../src/helpers/server";

export interface IProjectReadme {
  projectName: string;
  owner: string;
}

const ProjectView = () => {
  const { setReadme, projectReadme, setError } = useContext(AppContext);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  //@ts-ignore
  const { userName, projectName } = location.state;

  const handleBack = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate("/");
  };
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await getData<string>(
        `/projects/${userName}/${projectName}`
      );
      if (response.error) {
        setError(response.error);
        setReadme("");
        setIsLoading(false);
      } else {
        setError("");
        setReadme(response?.data || "");
        setIsLoading(false);
      }
    };
    fetchData();
  }, [userName, projectName]);

  return (
    <div className="project-view">
      {isLoading ? (
        <div
          className="spinner-border text-primary position-absolute top-50 start-50"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="" onClick={handleBack}>
                  {userName} Projects
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {projectName}
              </li>
            </ol>
          </nav>
          <div className="d-flex justify-content-center align-items-center">
            {parse(projectReadme)}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectView;
