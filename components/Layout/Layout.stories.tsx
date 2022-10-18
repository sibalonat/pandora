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
        children: (
            <>
              <h1>Main article area</h1>
              <p>
                In this layout, we display the areas in source order for any screen
                less that 500 pixels wide. We go to a two column layout, and then to a
                three column layout by redefining the grid, and the placement of items
                on the grid.
              </p>
            </>
          ),
    }
}