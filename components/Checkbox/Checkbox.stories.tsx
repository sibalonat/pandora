import React from "react";

import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Checkbox } from "./index";

export default {
    title: "Content/Tile",
    component: Checkbox
} as ComponentMeta<typeof Checkbox>

export const BasicCheckbox: ComponentStoryObj<typeof Checkbox> = {
    args: {
        // name: 'Home',
    }
}