import React from "react";

import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Tile } from "./Tile";

export default {
    title: "Content/Tile",
    component: Tile
} as ComponentMeta<typeof Tile>

export const BasicTile: ComponentStoryObj<typeof Tile> = {
    args: {
        header: 'kjo ishte ajo gjeja qe doja te thoja',
        children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nesciunt? Possimus maxime ut natus cumque necessitatibus fuga esse nam sit. Reiciendis beatae debitis pariatur maiores inventore optio, nemo provident? Culpa.`
    }
}