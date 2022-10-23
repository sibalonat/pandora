import styled from "@emotion/styled";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { FC } from "react";
import { StyledLink } from "@/components/StyledLink/StyledLink";
import { borderRadius, boxShadow } from "../styles";


// StyledLink
// Link
// styled
// Image
const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.fonts.regular};
    width: 94vw;
    @media(min-width: 900px) {
        width: 46vw;
    }
    ${borderRadius}
    ${({ theme }) => boxShadow(theme.components.shadow1, theme.components.shadow2, false)}
    `

// padding: 1vmin 4vmin 4 vmin;
const NoteLink = styled(StyledLink)`
    padding: 1vmin 4vmin;
`

export type Props = {
    header: string;
    imageProps: ImageProps;
    link: string;
}



export const Note: FC<Props> = ({ children, header, imageProps, link }) => (
    <Section>
        <Link href={link} passHref>
            <NoteLink>
                <h2>{header}</h2>
                <Image {...imageProps} alt={header} />
                {children}
            </NoteLink>
        </Link>
    </Section>
) 