import { createTheme } from '@mui/material';
import { components } from './components';
import { palette } from './palette';
import { typography } from './typography';
// import { breakpoints, shadows } from './props';
import { shadows } from './props';

export const theme = createTheme({
   spacing: (factor: number) => `${0.25 * factor}rem`,
   breakpoints: {
      values: {
         xs: 0,
         sm: 578,
         md: 768,
         lg: 992,
         xl: 1200,
         xxl: 1920,
      },
   },
   components: components(),
   typography: typography(),
   palette: palette(),
});

declare module '@mui/material/styles' {
   interface BreakpointOverrides {
      xxl: true;
   }
}