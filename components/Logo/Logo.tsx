import styled from "@emotion/styled";
// import { monotone } from "../styles";

// styled
export type Props = {size?: number}

// ${monotone};
export const Logo = styled.header<Props>`
    font-size: ${({size = 3}) => `${size}rem`};
`