import styled from "@emotion/styled";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { FC } from "react";
import { borderRadius, boxShadow } from "../styles";

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
const NoteLink = styled.a`
    all: unset;
    cursor: pointer;
    padding: 1vmin 4vmin;
    &:hover {
        opacity: 0.9;
    }
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
                <Image {...imageProps} />
                {children}
            </NoteLink>
        </Link>
    </Section>
) 