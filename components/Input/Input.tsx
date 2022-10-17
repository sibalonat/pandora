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
// width: ${({ width }) => width}rem;
// height: ${({ height }) => height}rem;
const StyledInput = styled.input`
    all: unset;
    width: 100%;
    height: 100%;
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

type LabelProps = {
    height?: number;
    width?: number;
}

const Label = styled.label<LabelProps>`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: ${({ width }) => width}rem;
    height: ${({ height }) => height}rem;
    color: ${({ theme }) => theme.fonts.regular};
    font-size: 1rem;
    `
// padding-left: 1.4rem;
const Text = styled.span`
    padding-left: 1.4rem;    
`

// margin-left: -2.5rem;
const StyledIcon = styled(Icon)`
    position: absolute;
    right: 0.5rem;
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
    width: 100%;
    position: relative;
    height: 100%;
    align-items: center;
`

export type Props = {
    label?: string;
    placeholder: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    feedback?: ReactChild;
    icon?: AvailableIcons;
} & LabelProps;

export const Input: FC<Props & InputHTMLAttributes<HTMLInputElement>> = ({
    label,
    height = 7,
    width = 20,
    icon,
    className,
    feedback,
    ...props
}) => {
    // const fieldId = useId()
    // console.log(width);

    return (
        <Label height={height} width={width} className={className} >
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