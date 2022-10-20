import styled from "@emotion/styled";

export type Props = {
    underline?: boolean; 
}

// styled
export const StyledLink = styled.a<Props>`
    all: unset;
    cursor: pointer;
    padding: 1vmin 4vmin;
    color: ${({theme}) => theme.fonts.regular};
    text-decoration: ${({underline}) => (underline ? "underline" : "none")};
    &:hover {
        opacity: 0.7;
    }
`