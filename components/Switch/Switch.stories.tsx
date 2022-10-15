import React from "react";

import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Switch } from "./Index";

export default {
    title: "Content/Tile",
    component: Switch
} as ComponentMeta<typeof Switch>

export const BasicSwitch: ComponentStoryObj<typeof Switch> = {
    play: async ({ args }) => {}
    // args: {}
    // args: {
    //     // name: 'Home',
    // }
}