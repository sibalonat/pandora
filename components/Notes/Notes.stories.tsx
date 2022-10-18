import React from "react";

import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Note } from "./Index";

export default {
    title: "Content/Note",
    component: Note
} as ComponentMeta<typeof Note>

export const BasicNote: ComponentStoryObj<typeof Note> = {
    // play: async ({ args }) => { },
    args: {
        header: "rect is not as good as vue but still",
        link: "/headsup-om",
        imageProps: {
            width: 1368,
            height: 770,
            alt: "image for this note",
            src: "https://picsum.photos/seed/picsum/1368/770",
        },
        children: (
            <>
                React is indeed popular.
                It builds spa, server side application and more.
                <ul>
                    <li>
                        setup and start with storybook
                    </li>
                    <li>
                        use also emotion
                    </li>
                </ul>
            </>
        ),
    },
    argTypes: {
        children: {
            control: false,
        }
    }
}