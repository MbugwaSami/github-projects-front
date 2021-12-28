import { IProjectDetails } from "../components/Projects";

export interface IAppState {
  projects: Array<IProjectDetails>;
  projectReadme: string;
  setProjects: (projects: Array<IProjectDetails>) => void;
  error: string;
  setReadme: (readme: string) => void;
  setError: (readme: string) => void;
}

export interface IAction {
  payload: any;
  type: string;
}

export const initialState = {
  projects: [],
  projectReadme: "",
  setProjects: () => {},
  error: "",
  setReadme: () => {},
  setError: () => {},
};

export const actions = {
  GET_PROJECTS: "GET_PROJECTS",
  GET_SINGLE_PROJECT: "GET_SINGLE_PROJECT",
  SET_ERROR: "SET_ERROR",
};

export const reducer = (state: IAppState, action: IAction) => {
  switch (action.type) {
    case actions.GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case actions.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case actions.GET_SINGLE_PROJECT:
      return {
        ...state,
        projectReadme: action.payload,
      };
    default:
      return state;
  }
};
