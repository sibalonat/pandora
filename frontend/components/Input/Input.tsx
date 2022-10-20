import styled from "@emotion/styled";
import {
    ChangeEventHandler,
    FC,
    InputHTMLAttributes,
    ForwardedRef,
    forwardRef,
    ReactChild
} from "react";
// import { useId } from "@/components/hooks/useId";
import { boxShadow } from "../styles";
import { Icon, AvailableIcons } from "@/components/Icon/Icon";

// AvailableIcons
// ReactChild

// useId
// styled
// Forwarwarded

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

type WrapperProps = {
    height?: number;
    width?: number;
    isLabelVisible?: boolean;
    isFeedbackVisible?: boolean;
}
// justify-content: flex-start;
// flex-direction: column;

const InputWrapper = styled.div`
    grid-area: input;
    display: flex;
    width: 100%;
    position: relative;
    height: 100%;
    align-items: center;
`

const Wrapper = styled.label<WrapperProps>`
    display: grid;
    gap: 0.1rem;
    grid-template-areas: 
    "label"
    "input"
    "feedback";
    grid-template-rows: ${({ isLabelVisible, isFeedbackVisible }) => {
        if (isLabelVisible && isFeedbackVisible) {
            return "1fr 3fr 1fr";
        } else if (isLabelVisible) {
            return "1fr 4fr 0fr";
        } else if (isFeedbackVisible) {
            return "0fr 4fr 1fr";
        } else {
            return "0fr 1fr 0fr";
        }
    }};
    width: ${({ width }) => width}rem;
    height: ${({ height }) => height}rem;
    color: ${({ theme }) => theme.fonts.regular};
    font-size: 1rem;
    `
// padding-left: 1.4rem;
const Label = styled.span`
    grid-area: label;
    padding-left: 1.4rem;    
`
// padding-left: 1.4rem;    
export const Feedback = styled.span`
    grid-area: feedback;
`
// const Text = styled.span`
//     padding-left: 1.4rem;    
// `

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


export type Props = {
    label?: string;
    placeholder: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    feedback?: ReactChild;
    icon?: AvailableIcons;
} & WrapperProps;




export const Input: FC<Props & InputHTMLAttributes<HTMLInputElement>> = forwardRef((
    {
        label,
        height = 7,
        width = 20,
        icon,
        className,
        feedback,
        ...rest
    }, ref
) => (
    <Wrapper
        labelVisible={Boolean(label)}
        feedbackVisible={Boolean(label)}
        height={height}
        width={width}
        className={className} >
        {/* {label && <Text>{label}</Text>} */}
        <Label>{label}</Label>

        {/* <br /> */}
        {/* <StyledInput withIcon={Boolean(icon)} id={fieldId} {...props} /> */}
        {/* withIcon={Boolean(icon)} {...props} */}
        <InputWrapper>
            <StyledInput
                {...rest}
                ref={ref as ForwardedRef<HTMLInputElement>}
                width={width}
                height={height}
            />
            {icon && <StyledIcon name={icon} />}
        </InputWrapper>
        {/* <br /> */}
        {/* <Label htmlFor={fieldId}>{feedback}</Label> */}
        {/* feedback */}
        {/* {feedback && <Text>{feedback}</Text>} */}
        <Feedback role="alert">{feedback}</Feedback>
        {/* <Label>
            {feedback}
        </Label> */}
    </Wrapper>
))