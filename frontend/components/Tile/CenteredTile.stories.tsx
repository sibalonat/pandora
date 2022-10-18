import React from "react";

import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { CenteredTile } from "./CenteredTile";

export default {
    title: "Content/CenteredTile",
    component: CenteredTile
} as ComponentMeta<typeof CenteredTile>

export const BasicTile: ComponentStoryObj<typeof CenteredTile> = {
    args: {
        header: 'kjo ishte ajo gjeja qe doja te thoja',
        children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nesciunt? Possimus maxime ut natus cumque necessitatibus fuga esse nam sit. Reiciendis beatae debitis pariatur maiores inventore optio, nemo provident? Culpa.`
    }
}