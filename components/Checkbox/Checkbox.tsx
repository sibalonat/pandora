import styled from "@emotion/styled";
import { ChangeEvent, FC, useRef } from "react";
import { boxShadow, transition } from "../styles";

// transition

const Wrapper = styled.label`
    font-size: 1.8rem;
    & input {
        display: none;
    }
    & input:checked {
        & ~ label {
            ${({theme}) => boxShadow(theme.components.shadow1, theme.components.shadow2, true)};
            color: ${({theme}) => theme.fonts.regular};
        }
    }
`;
const VisiblePart = styled.label`
    display: inline-block;
    user-select: none;
    cursor: pointer;
    text-align: center;
    border-radius: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
    color: rgba(0, 0, 0, 0);
    background: ${({theme}) => theme.components.background};
    ${transition()};
    &:hover {
        ${({theme}) => boxShadow(theme.components.shadow1, theme.components.shadow2, true)}
    }
    ${({theme}) => boxShadow(theme.components.shadow1, theme.components.shadow2, false)};
`

type Props = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox: FC<Props> = ({onChange}) => {
    const {current: fieldId} = useRef(
        `prefix-${Math.random().toString(16).slice(2)}`
    );

    return (
        <Wrapper>
            <input id={fieldId} type="checkbox" onChange={onChange} />
            <VisiblePart htmlFor={fieldId}>&#10003;</VisiblePart>
        </Wrapper>
    )
}

// FC