import styled from "@emotion/styled";
import { ChangeEventHandler, FC, InputHTMLAttributes, ReactChild } from "react";
import { useId } from "@/components/hooks/useId";
import { boxShadow } from "../styles";
import { Icon, AvailableIcons } from "@/components/Icon/Icon";

// AvailableIcons
// ReactChild

// useId
// styled

type StyledIconProp = {
    withIcon: boolean;
}

const StyledInput = styled.input<StyledIconProp>`
    all: unset;
    width: 20rem;
    height: 4rem;
    border-radius: 1rem;
    font-size: 1.4rem;
    padding-left: ${({withIcon}) => (withIcon ? 2.8 : 1.4)}rem;
    color: ${({theme}) => theme.fonts.regular};
    ${({theme}) => boxShadow(theme.components.shadow1, theme.components.shadow2, true)}
    &::placeholder {
        color: ${({theme}) => theme.fonts.placeholder};
    }
    &:focus {
        ${({theme}) => boxShadow(theme.components.shadow1, theme.components.shadow2, false)}
        ~ svg {
            color: ${({theme}) => theme.fonts.regular};
            opacity: 1;
        }
    }

`

const Label = styled.label`
    color: ${({theme}) => theme.fonts.regular};
    font-size: 1rem;
    padding-left: 1.4rem;
`

const StyledIcon = styled(Icon)`
    display: block;
    margin-top: -3rem;
    padding-left: 0.5rem;
    color: ${({theme}) => theme.fonts.placeholder};
    opacity: 0.7;
`

export type Props = {
    label: string;
    placeholder: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    feedback?: ReactChild; 
    icon?: AvailableIcons;
}

export const Input: FC<Props & InputHTMLAttributes<HTMLInputElement>> = ({
    label, 
    icon, 
    feedback, 
    ...props
}) => {
    // const fieldId = useId()
    return (
        <Label>
            {label}
            <br />
            {/* <StyledInput withIcon={Boolean(icon)} id={fieldId} {...props} /> */}
            <StyledInput withIcon={Boolean(icon)} {...props} />
            {icon && <StyledIcon name={icon} />}
            <br />
            {/* <Label htmlFor={fieldId}>{feedback}</Label> */}
            <Label>{feedback}</Label>
        </Label>
    )
}