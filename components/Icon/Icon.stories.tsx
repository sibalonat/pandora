import React from "react";

import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Icon } from "./Index";

export default {
    title: "Content/Icon",
    component: Icon
} as ComponentMeta<typeof Icon>

export const BasicIcon: ComponentStoryObj<typeof Icon> = {
    args: {
        name: 'Home',
    }
}