import User from "@/pages/user";

import { store } from "@/store";

import { Provider } from "react-redux";


export default {
    title: "Pages/User",
    component: User
}

export const UserPage = () => (
    <Provider store={store}>
        <User />
    </Provider>
)