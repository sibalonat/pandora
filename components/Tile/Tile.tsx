import styled from "@emotion/styled";
import { FC } from "react";
import { boxShadow, borderRadius } from "@/components/styles";
type Props = {
    header: string,
    children: string
}
// styled
const Section = styled.section`
    ${borderRadius};
    padding: 1vmin 4vmin 4vmin;
    background: ${({theme}) => theme.background}
    color: ${({theme}) => theme.fonts.regular};
    ${({ theme }) => boxShadow(theme.components.shadow1, theme.components.shadow2, '')};
`

export const Tile: FC<Props> = ({ header, children }) => (
    <Section>
        <h2>{header}</h2>
        {children}
    </Section>
);