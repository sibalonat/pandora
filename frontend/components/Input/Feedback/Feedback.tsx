import styled from "@emotion/styled";
import { FC } from "react";

// styled
type Props = {
    isValid?: boolean; 
}

export const Feedback = styled.span<Props> `
    color: ${({isValid, theme}) => isValid ? theme.fonts.valid : theme.fonts.invalid}
`

export const ConditionalFeedback: FC = ({children}) => children ? <Feedback>{children}</Feedback> : <>&nbsp;</>