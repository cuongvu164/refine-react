import { AuthProvider } from "@pankod/refine-core";
import nookies from "nookies";
import { API_URL } from "./constants";
import axios from "axios";

const postData = async (url = '', data: any) => {
  await axios.post(`${url}/V1/integration/admin/token`, data)
    .then((response) => {
      console.log("response.data", response.data)
      localStorage.setItem('token', response.data)
    })
}

const axiosInstance = axios.create();

export const authProvider: AuthProvider = {
  login: async ({ username, password, remember }) => {
    try {
      await postData(API_URL, { username, password })
      const jwt = localStorage.getItem('token');
      console.log("token in login", jwt);
      nookies.set(null, "auth", JSON.stringify({ username, password, token: jwt }), {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });

      await (axiosInstance.defaults.headers.common = {
        Authorization: `Bearer ${jwt}`,
      })

      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
  },
  logout: () => {
    nookies.destroy(null, "auth");
    localStorage.removeItem('token');
    return Promise.resolve();
  },
  checkError: (error) => {
    if (error && error.statusCode === 401) {
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: async (ctx) => {
    const cookies = nookies.get(ctx);
    const jwt = localStorage.getItem('token');
    console.log("jwt token with checkAuth", jwt)
    if (!jwt) {
      return Promise.reject();
    }
    await (axiosInstance.defaults.headers.common = {
      Authorization: `Bearer ${jwt}`,
    })
    return Promise.resolve();
  },
  getPermissions: () => {
    const auth = nookies.get()["auth"];
    if (auth) {
      const parsedUser = JSON.parse(auth);
      return Promise.resolve(parsedUser.roles);
    }
    return Promise.reject();
  },
  getUserIdentity: () => {
    const auth = nookies.get()["auth"];
    if (auth) {
      const parsedUser = JSON.parse(auth);
      return Promise.resolve(parsedUser.username);
    }
    return Promise.reject();
  },
};
