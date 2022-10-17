import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Feedback } from "./Feedback";

// Feedback
export default {
    title: "Controls/Feedback",
    component: Feedback
} as ComponentMeta<typeof Feedback>

export const ValidFeedback: ComponentStoryObj<typeof Feedback> = {
    play: async ({ args }) => {},
}

ValidFeedback.args = {
    children: "Looks good",
    isValid: true
}

export const InvalidFeedback: ComponentStoryObj<typeof Feedback> = {
    play: async ({ args }) => {},
}

InvalidFeedback.args = {
    children: "Please provide a valid value",
    isValid: false
}