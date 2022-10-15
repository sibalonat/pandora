import React from "react";

import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
// import { screen, ComponentStoryObj } from "@storybook/react";

import { Button } from "./Button";

export default {
    title: 'Controls/Button',
    component: Button,
    args: {
        children: "Button"
    }
} as ComponentMeta<typeof Button>;

// const Template: ComponentStoryObj <typeof Button> = (args: any) => <Button {...args} />;
// userEvent
// export const BasicButton = Template.bind({})
export const PrimaryButton: ComponentStoryObj<typeof Button> = {
    args: {
        color: 'primary'
    }
}
// BasicButton.args = {
//     children: "Button"
// }