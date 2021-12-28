import axios, { AxiosResponse } from "axios";

export const getData = async <T extends Object>(url: string) => {
  axios.defaults.baseURL = "https://github-repos-336603.uc.r.appspot.com/api";
  try {
    const response: AxiosResponse<T> = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return { error: null, data: response?.data };
  } catch (error: any) {
    return { error: error.response?.data.message, data: null };
  }
};
