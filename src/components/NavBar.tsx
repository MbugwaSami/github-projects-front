import React, { useState, ChangeEvent, MouseEvent, useContext } from "react";
import { useNavigate } from "react-router";
import { getData } from "../../src/helpers/server";

import AppContext from "../context";
import { IProjectDetails } from "./Projects";

const NavBar = () => {
  const navigate = useNavigate();
  const { setProjects, setError } = useContext(AppContext);
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleUserChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.target;
    if (value) {
      setUserName(value);
    }
  };

  const handleSearch = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/");
    setIsLoading(true);
    const response = await getData<Array<IProjectDetails>>(
      `/projects/${userName}`
    );
    if (response.error) {
      setError(response.error);
      setProjects([]);
      setIsLoading(false);
    } else {
      setError("");
      setProjects(response?.data || []);
      setIsLoading(false);
    }
  };

  const handleHome = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-primary p-2">
      <div className="text-light cursor-pointer" onClick={handleHome}>
        Github Repos
      </div>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search user..."
          aria-label="Search"
          onChange={handleUserChange}
        />
        <button
          className="btn border border-white text-light"
          onClick={handleSearch}
        >
          {isLoading ? (
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            "Search"
          )}
        </button>
      </form>
    </nav>
  );
};

export default NavBar;
