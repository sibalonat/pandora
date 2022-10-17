import styled from "@emotion/styled";

// styled
type Props = {
    isValid?: boolean; 
}

export const Feedback = styled.span<Props> `
    color: ${({isValid, theme}) => isValid ? theme.fonts.valid : theme.fonts.invalid}
`