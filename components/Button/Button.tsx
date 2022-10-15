import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { MouseEvent } from "react";
import { AppTheme } from "@/styles/themes";

export type Color = "primary" | "secondary" | "danger" | "warning";

export type Props = {
    children: string;
    color?: Color;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const getColors = (theme: AppTheme, color?: Color): SerializedStyles => {
    switch (color) {
        case "secondary":
            return css `
            color: ${theme.fonts.regular};
            `;
        case "primary":
        case "danger":
            return css `
            background: ${theme.components[color]};
            color: ${theme.fonts.button};
            `;
        case "warning":
            return css `
            background: ${theme.components[color]};
            color: ${theme.fonts.warning};
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
    ${({theme, color}) => getColors(theme, color)}
    ${({ theme }) => `box-shadow: 1vmin 1vmin 1vmin ${theme.components.shadow1}, -1vmin -1vmin 1vmin ${theme.components.shadow1}`};
    &:hover { 
        opacity: .4;
    }
    &:active {
        ${({ theme }) => `box-shadow: 1vmin 1vmin 1vmin ${theme.components.shadow1} inset, -1vmin -1vmin 1vmin ${theme.components.shadow1} inset`};
    }
`;

Button.defaultProps = {
    color: "primary"
}