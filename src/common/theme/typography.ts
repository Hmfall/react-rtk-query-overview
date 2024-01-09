import { palette } from './palette';

export const typography = () => ({
   fontFamily: [
      'Inter', 'sans-serif',
   ].join(','),
   mainText: {
      fontSize: '1rem',
      color: palette().primary.main,
   },
   secondaryText: {
      fontSize: '0.9rem',
      fontWeight: 400,
      color: palette().primary.main,
   },
   mainTitle: {
      fontSize: '2rem',
      fontWeight: 600,
      color: palette().primary.main,
   },
   subTitle: {
      fontSize: '1.3rem',
      fontWeight: 500,
      color: palette().primary.main,
   },
});

declare module '@mui/material/styles' {
   interface TypographyVariants {
      mainTitle: React.CSSProperties;
      secondaryText: React.CSSProperties;
      mainText: React.CSSProperties;
      subTitle: React.CSSProperties;

   }

   interface TypographyVariantsOptions {
      mainText?: React.CSSProperties;
      secondaryText?: React.CSSProperties;
      mainTitle?: React.CSSProperties;
      subTitle?: React.CSSProperties;
   }
}

declare module '@mui/material/Typography' {
   interface TypographyPropsVariantOverrides {
      body1: false;
      mainText: true;
      body2: false;
      secondaryText: true;
      h2: false;
      mainTitle: true;
      h3: false;
      subTitle: true;
   }
}