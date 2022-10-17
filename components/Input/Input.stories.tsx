import React from "react";

import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Input } from "./Index";

export default {
    title: "Controls/Input",
    component: Input,
    args: {
        placeholder: "your name",
        label: "name",
    }
} as ComponentMeta<typeof Input>

export const BasicIcon: ComponentStoryObj<typeof Input> = {
    play: async ({ args }) => {},
    // args: {
    //     // children: "mnplus"
    //     name: 'Home',
    // }
}