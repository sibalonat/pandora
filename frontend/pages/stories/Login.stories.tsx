import Login from "@/pages/login";
import { store } from "@/store";
import { Provider } from "react-redux";

export default {
  title: "Pages/Login",
  component: Login,
};

export const LoginPage = () => (
  <Provider store={store}>
    <Login />
  </Provider>
);
