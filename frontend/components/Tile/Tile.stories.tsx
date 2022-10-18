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

export const BasicTileWithSmallAmountOfContent: ComponentStoryObj<typeof Tile> = {
    ...BasicTile,
    args: {
        header: "Lorem ipsum dolor",
        children: "sit amet consectetur adipisicing elit. Voluptas, in culpa? Cupiditate vel quisquam asperiores sit ea vitae possimus reprehenderit nesciunt enim magnam, perspiciatis facilis culpa optio exercitationem inventore atque."
    }
}