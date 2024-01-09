import { useTheme } from '@mui/material';

const usePalette = () => {
   const theme = useTheme();
   return theme.palette;
};

export default usePalette;