import styled from "@emotion/styled";
import { ChangeEventHandler, FC, InputHTMLAttributes } from "react";

// styled
const StyledInput = styled.input``
const Label = styled.label``

export type Props = {
    label: string;
    placeholder: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input: FC<Props & InputHTMLAttributes<HTMLInputElement>> = ({
    label, 
    ...props
}) => {
    return (
        <Label>
            {label}
            <br />
            <StyledInput {...props} />
            <br />
        </Label>
    )
}