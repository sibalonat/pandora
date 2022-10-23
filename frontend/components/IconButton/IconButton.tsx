import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { FC, ForwardedRef, forwardRef, MouseEvent } from "react";

import { Icon, Props as IconProps } from "@/components/Icon/Icon";
import { boxShadow, transition } from "@/components/styles";
// Icon

type ButtonProps = { size?: string };

const Button = styled.button<ButtonProps>`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    ${({ size }) => css`
        width: ${size};
        height: ${size};
    `}
    border-radius: 50%;
    ${transition()};
    ${({ theme }) => boxShadow(theme.components.shadow1, theme.components.shadow2, false)};
    &:active {
        ${({ theme }) => boxShadow(theme.components.shadow1, theme.components.shadow2, true)};
    }
    &:hover {
        opacity: 0.9;
    }
`;

export type Props = {
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
} & Omit<IconProps, "ref">;

export const IconButton: FC<Props> = forwardRef (({ onClick, ...props }, ref) => (
    <Button
        onClick={onClick}
        size={`${(props.size || 2) * 2}rem`}
        title={props.name}
        ref={ref as ForwardedRef<HTMLButtonElement>}
        >
        <Icon {...props}></Icon>
    </Button>
))

IconButton.displayName = "IconButton"