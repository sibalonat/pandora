import React from "react";

import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Logo } from "./Index";

export default {
    title: "Content/Logo",
    component: Logo
} as ComponentMeta<typeof Logo>

export const LogoBasic: ComponentStoryObj<typeof Logo> = {
    // play: async ({ args }) => {},
    args: {
        children: "mnplus"
    }
}