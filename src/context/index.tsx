import { createContext, FC, useReducer } from "react";

import { initialState, actions, reducer, IAppState } from "./reducer";
import { IProjectDetails } from "../components/Projects";
import { read } from "fs";

const AppContext = createContext({} as IAppState);

export interface IAppContext {
  children: React.ReactElement;
}

export const Provider: FC<IAppContext> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    projects: state.projects,
    setProjects: (projects: Array<IProjectDetails>) => {
      dispatch({ type: actions.GET_PROJECTS, payload: projects });
    },
    projectReadme: state.projectReadme,
    error: state.error,
    setReadme: (readme: string) => {
      dispatch({ type: actions.GET_SINGLE_PROJECT, payload: readme });
    },
    setError: (error: string) => {
        dispatch({ type: actions.SET_ERROR, payload: error });
      },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
