import React from "react";

import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Layout } from "./Index";
import { Provider } from "react-redux";
import { store } from "@/store";


export default {
    title: "Content/Layout",
    component: Layout
} as ComponentMeta<typeof Layout>

export const BasicLayout: ComponentStoryObj<typeof Layout> = {
    play: async ({ args }) => {},
    args: {
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
    },
    decorators: [
      (Story) => (
        <Provider store={store}>
          <Story />
        </Provider>
      )
    ]
}