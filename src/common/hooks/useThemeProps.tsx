import { useTheme } from '@mui/material';
import {
   shadows,
   borderRadius,
} from '../theme/props';

const useThemeProps = () => {
   const theme = useTheme();

   return {
      theme,
      palette: theme.palette,
      shadows,
      borderRadius,
   };
};

export default useThemeProps;