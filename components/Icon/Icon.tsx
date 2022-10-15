import styled from "@emotion/styled";
import { FC } from "react";
import { Icons } from "./Icons";

// Icons

export type AvailableIcons = keyof typeof Icons;

type WrapperProps = {
    size: string
}

export type Props = {
    name: AvailableIcons;
    size: string;
} & WrapperProps & React.SVGProps<SVGAElement>;

const Wrapper = styled.div<WrapperProps>`
    color: ${({theme}) => theme.fonts.regular };
    width: ${({size}) => size };
    height: ${({size}) => size };
`

export const Icon: FC<Props> = ({name, size = "2rem", ...rest}) => {
    const Icon = Icons[name];
    const sizes = {width: size, height: size};

    return (
        <Wrapper size={size}>
            <Icon {...sizes}{...rest}/>
        </Wrapper>
    );
}