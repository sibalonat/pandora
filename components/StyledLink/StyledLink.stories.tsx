import React from "react";

import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { StyledLink } from "./Index";

export default {
    title: "Content/StyledLink",
    component: StyledLink
} as ComponentMeta<typeof StyledLink>

export const BasicNote: ComponentStoryObj<typeof StyledLink> = {
    play: async ({ args }) => { },
    args: {
        children: ("React is indeed popular."),
        href: "/headsup-om",
    },
}