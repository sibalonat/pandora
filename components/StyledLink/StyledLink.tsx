import styled from "@emotion/styled";

// styled
export const StyledLink = styled.a`
    all: unset;
    cursor: pointer;
    padding: 1vmin 4vmin;
    color: ${({theme}) => theme.fonts.regular};
    &:hover {
        opacity: 0.9;
    }
`