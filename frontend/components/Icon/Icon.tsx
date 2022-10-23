import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { FC } from "react";
import { Icons } from "./Icons";

// Icons

export type AvailableIcons = keyof typeof Icons;

export type Props = {
  name: AvailableIcons;
  size?: number;
} & React.SVGProps<SVGSVGElement>;

export const Icon: FC<Props> = ({ name, size = 2, ...rest }) => {
  const Icon = styled(Icons[name])`
    color: ${({ theme }) => theme.fonts.regular};
  `;
  const sizeRem = `${size}rem`;
  const sizes = { width: sizeRem, height: sizeRem };
  console.log(name);
  console.log(rest);

  return <Icon role="img" aria-label={name} {...sizes} {...rest} />;
};
