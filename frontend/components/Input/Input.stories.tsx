import React from "react";

import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Input } from "./Index";
import { Feedback } from "./Feedback/Feedback";

// Feedback

export default {
    title: "Controls/Input",
    component: Input,
    args: { }
} as ComponentMeta<typeof Input>

export const PrimaryInput: ComponentStoryObj<typeof Input> = {
    play: async ({ args }) => {},
    args: {
        label: "name",
        // children: "mnplus"
        feedback: 'Looks',
    }
}

export const WithValidFeedback: ComponentStoryObj<typeof Input> = {
    args: {
        placeholder: "text here",
        label: "text",
        feedback: <Feedback isValid={true}>Looks good</Feedback>
    },
    argTypes: {
        feedback: {
            control: false,
        }
    }
}

export const WithInvalidFeedback: ComponentStoryObj<typeof Input> = {
    args: {
        placeholder: "text here",
        label: "text",
        feedback: <Feedback isValid={false}>Required</Feedback>
    },
    argTypes: {
        feedback: {
            control: false,
        }
    }
}

export const WithIcon: ComponentStoryObj<typeof Input> = {
    args: {
        icon: "User",
        placeholder: "user",
        height: 4,
    },
}