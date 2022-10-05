import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { MouseEvent } from "react";
// css
// Mouse

export type Color = "primary" | "secondary" | "danger" | "warning";

export type Props = {
    children: string;
    color?: Color;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const getColors = (color?: Color): SerializedStyles => {
    switch (color) {
        case "secondary":
            return css `
            background: #5e5c64e6;
            `;
        case "danger":
            return css `
            background: #dc3545e6;
            color: #e4ebf5e6;
            `;
        case "warning":
            return css `
            background: #ffca2ce6;
            color: #e4ebf5e6;
            `;
        case "primary":
            return css `
            background: #6d5dfc;
            color: #e4ebf5e6;
            `;
        default:
            return css ``;
    }    
}

export const Button = styled.button<Props>`
    all: unset;
    display: flex;
    justify-self: center;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: pointer;
    font-size: 1.6rem;
    width: 15rem;
    height: 4rem;
    border-radius: 1rem;
    transition: all .4s ease;
    ${({color}) => getColors(color)}
    box-shadow: 1vmin 1vmin 1vmin #c8d0e7, -1vmin -1vmin 1vmin #ffffff;
    &:hover { 
        opacity: .4;
    }
    &:active {
        box-shadow: 1vmin 1vmin 1vmin #c8d0e7 inset, -1vmin -1vmin 1vmin #ffffff inset;
    }
`;

Button.defaultProps = {
    color: "primary"
}