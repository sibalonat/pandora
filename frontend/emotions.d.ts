import "@emotion/react";
import { AppTheme } from './styles/themes';

// AppTheme
declare module "@emotion/react" {
    export interface Theme extends AppTheme {}
}