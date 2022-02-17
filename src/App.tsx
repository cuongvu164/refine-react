import { Refine } from "@pankod/refine-core";
import { notificationProvider, LoginPage, Layout, ErrorComponent } from "@pankod/refine-antd";
import routerProvider from "@pankod/refine-react-router";
import { DashboardPage } from "./dashboard";
import "@pankod/refine-antd/dist/styles.min.css";
import dataProvider from "@pankod/refine-simple-rest";
import { DirectoryList } from "pages/directory";
import { ProductCreate, ProductEdit, ProductList, ProductShow } from "pages/product";
import { API_URL } from "./constants"
import { authProvider } from "./authProvider"
// import "@styles/global.css";
import "@pankod/refine-antd/dist/styles.min.css";
import axios from "axios"


function App() {
  const axiosInstance = axios.create();

  const jwt = localStorage.getItem('token');
  axiosInstance.defaults.headers.common = {
    Authorization: `Bearer ${jwt}`,
  }

  return (
    <Refine
      routerProvider={routerProvider}
      notificationProvider={notificationProvider}
      dataProvider={dataProvider(API_URL, axiosInstance)}
      authProvider={authProvider}
      resources={[
        {
          name: "V1/directory/countries",
          list: DirectoryList,
          options: { label: "Countries" },
        },
        {
          name: "V1/products",
          list: ProductList,
          create: ProductCreate,
          show: ProductShow,
          edit: ProductEdit,
          canDelete: true,
          options: { label: "Products" },
        }
      ]}
      Layout={Layout}
      LoginPage={LoginPage}
      DashboardPage={DashboardPage}
    />
  );
}

export default App;
