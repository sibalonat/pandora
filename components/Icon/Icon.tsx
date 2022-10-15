import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { FC } from "react";
import { Icons } from "./Icons";

// Icons

export type AvailableIcons = keyof typeof Icons;

type WrapperProps = {
    size?: number
}
// size: string;

export type Props = {
    name: AvailableIcons;
} & WrapperProps & React.SVGProps<SVGSVGElement>;
{/* <SVGAElement></SVGAElement> */}

const Wrapper = styled.div<WrapperProps>`
    color: ${({theme}) => theme.fonts.regular };
    ${({size}) => {
        const sizeRem = `${size}rem`;
        return css`
            width: ${sizeRem};
            height: ${sizeRem};
        `
    }}
`

export const Icon: FC<Props> = ({name, size = 2, ...rest}) => {
    const Icon = Icons[name];
    const sizeRem = `${size}rem`
    const sizes = {width: sizeRem, height: sizeRem};
    console.log(name);
    console.log(rest);

    return (
        <Wrapper size={size}>
            <Icon {...sizes}{...rest}/>
        </Wrapper>
    );
}