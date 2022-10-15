import React from "react";

import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { IconButton } from "./Index";

export default {
    title: "Controls/IconButton",
    component: IconButton
} as ComponentMeta<typeof IconButton>

export const BasicIcon: ComponentStoryObj<typeof IconButton> = {
    play: async ({ args }) => {},
    args: {
        // children: "mnplus"
        name: 'Home',
    }
}