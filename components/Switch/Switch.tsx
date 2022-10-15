import styled from "@emotion/styled";
import { FC, useRef, ChangeEvent } from "react";
import { useId } from "@/components/hooks/useId";
import { boxShadow, transition } from "../styles";

const Wrapper = styled.label`
    & input {
        display: none;
    }
    & input:checked {
        & ~ label {
            background: ${({ theme }) => theme.components.primary};
            &::after {
                margin-left: 3.5rem;
                background: ${({ theme }) => theme.components.active};
            }
        }
    }
`
const VisiblePart = styled.label`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    height: 3rem;
    width: 6rem;
    border-radius: 1.6rem;
    background: ${({ theme }) => theme.components.background};
    ${({ theme }) => boxShadow(theme.components.shadow1, theme.components.shadow2, false)};
    ${transition()};
    &::after {
        content: "";
        margin-left: 0.5rem;
        width: 2.1rem;
        height: 2.1rem;
        border-radius: 50%;
        background: ${({ theme }) => theme.components.nonActive};
    }

`

type Props = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Switch: FC<Props> = ({ onChange }) => {
    const fieldId = useId()

    return (
        <Wrapper>
            <input id={fieldId} type="checkbox" onChange={onChange} />
            <VisiblePart htmlFor={fieldId} />
        </Wrapper>
    )

}