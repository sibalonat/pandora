import styled from "@emotion/styled";
import { ChangeEventHandler, FC, InputHTMLAttributes, ReactChild } from "react";
// import { useId } from "@/components/hooks/useId";
import { boxShadow } from "../styles";
import { Icon, AvailableIcons } from "@/components/Icon/Icon";

// AvailableIcons
// ReactChild

// useId
// styled

// type StyledIconProp = {
//     withIcon: boolean;
// }

// const StyledInput = styled.input<StyledIconProp>`
const StyledInput = styled.input`
    all: unset;
    width: ${({ width }) => width}rem;
    height: ${({ height }) => height}rem;
    border-radius: 1rem;
    font-size: 1.4rem;
    padding: 0 2.6rem 0 1.4rem;
    color: ${({ theme }) => theme.fonts.regular};
    ${({ theme }) => boxShadow(theme.components.shadow1, theme.components.shadow2, true)}
    &::placeholder {
        color: ${({ theme }) => theme.fonts.placeholder};
    }
    &:focus {
        ${({ theme }) => boxShadow(theme.components.shadow1, theme.components.shadow2, false)}
        ~ svg {
            color: ${({ theme }) => theme.fonts.regular};
            opacity: 1;
        }
    }

`

const Label = styled.label`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    color: ${({ theme }) => theme.fonts.regular};
    font-size: 1rem;
    `
// padding-left: 1.4rem;
const Text = styled.span`
    padding-left: 1.4rem;    
`

const StyledIcon = styled(Icon)`
    margin-left: -2.5rem;
    color: ${({ theme }) => theme.fonts.placeholder};
    opacity: 0.7;
`
// const StyledIcon = styled(Icon)`
//     display: block;
//     margin-top: -3rem;
//     padding-left: 0.5rem;
//     color: ${({ theme }) => theme.fonts.placeholder};
//     opacity: 0.7;
// `
const InputWrapper = styled.div`
    display: flex;
    align-items: center;
`

export type Props = {
    label?: string;
    placeholder: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    feedback?: ReactChild;
    icon?: AvailableIcons;
    width?: number;
    height?: number;
}

export const Input: FC<Props & InputHTMLAttributes<HTMLInputElement>> = ({
    label,
    height = 4,
    width = 20,
    icon,
    feedback,
    ...props
}) => {
    // const fieldId = useId()
    console.log(width);

    return (
        <Label>
            {label && <Text>{label}</Text>}

            {/* <br /> */}
            {/* <StyledInput withIcon={Boolean(icon)} id={fieldId} {...props} /> */}
            {/* withIcon={Boolean(icon)} {...props} */}
            <InputWrapper>
                <StyledInput
                    {...props}
                    width={width}
                    height={height}
                />
                {icon && <StyledIcon name={icon} />}
            </InputWrapper>
            {/* <br /> */}
            {/* <Label htmlFor={fieldId}>{feedback}</Label> */}
            {/* feedback */}
            {feedback && <Text>{feedback}</Text>}
            {/* <Label>
                {feedback}
            </Label> */}
        </Label>
    )
}