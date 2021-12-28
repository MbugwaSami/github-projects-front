import React, { MouseEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context";

export interface IProjectDetails {
  name: string;
  visibility: string;
  open_issues: string;
  owner: {
    login: string;
  };
}

const Projects = () => {
  const { projects } = useContext(AppContext);
  const navigate = useNavigate();
  const handleReadmeButton = async (
    event: MouseEvent<HTMLButtonElement>,
    userName: string,
    projectName: string
  ) => {
    event.preventDefault();
    navigate(`/${projectName}`, { state: { userName, projectName } });
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            {projects?.[0]?.owner?.login} Projects
          </li>
        </ol>
      </nav>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Project Name</th>
            <th scope="col">Visibility</th>
            <th scope="col">Open Issues</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{project?.name}</td>
                <td>{project?.visibility}</td>
                <td>{project?.open_issues}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={(event) =>
                      handleReadmeButton(
                        event,
                        project.owner.login,
                        project.name
                      )
                    }
                  >
                    Readme
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Projects;
