import React from "react";

import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Layout } from "./Index";

export default {
    title: "Content/Layout",
    component: Layout
} as ComponentMeta<typeof Layout>

export const BasicLayout: ComponentStoryObj<typeof Layout> = {
    play: async ({ args }) => {},
    args: {
        // children: "mnplus"
        children: 'here here',
    }
}