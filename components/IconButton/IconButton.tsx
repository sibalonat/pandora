import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { FC, MouseEvent } from "react";
// import css from "styled-jsx/css";
import { Icon, Props as IconProps } from "@/components/Icon/Icon";
import { boxShadow, transition } from "@/components/styles";
// Icon

type ButtonProps = { size?: string };
// styled
// width: 4rem;
// height: 4rem;
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
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
} & IconProps;

export const IconButton: FC<Props> = ({ onClick, ...props }) => {
    // console.log(Icon);
    return (
        <Button 
        onClick={onClick} 
        size={`${(props.size || 2) * 2}rem`} 
        title={props.name}>
            <Icon {...props}></Icon>
        </Button>
    );

};