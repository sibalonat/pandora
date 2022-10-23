import styled from "@emotion/styled";
import { FC, ReactChild } from "react";
import { boxShadow, borderRadius, transition } from "@/components/styles";
export type Props = {
  header: ReactChild;
};

const Section = styled.section`
    ${borderRadius};
    padding: 1vmin 4vmin 4vmin;
    background: ${({ theme }) => theme.background}
    color: ${({ theme }) => theme.fonts.regular};
    ${({ theme }) =>
      boxShadow(theme.components.shadow1, theme.components.shadow2, false)};
`;

export const Tile: FC<Props> = ({ header, children, ...rest }) => (
  <Section {...rest}>
    <h2>{header}</h2>
    {children}
  </Section>
);
