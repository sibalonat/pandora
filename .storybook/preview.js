import { ThemeProvider } from '@emotion/react';
import * as NextImage from 'next/image';
const OriginalNextImage = NextImage.default;

import { Themes } from "../styles/themes";


Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />
})

const withThemeProvider = (Story, context) => {
  const background = context.globals.backgrounds?.value || parameters.backgrounds.defaultColor;
  const theme = Object.values(Themes).find(theme => theme.background === background)

  // const theme = {}
  return (
    <ThemeProvider theme={theme}>
      <Story {...context}/>
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider]


export const parameters = {
  backgrounds: {
    default: 'dark',
    defaultColor: '#5e5c64',
    values: [
      {name: 'dark', value: '#5e5c64'},
      {name: 'light', value: '#e4ebf5'},
    ]
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}