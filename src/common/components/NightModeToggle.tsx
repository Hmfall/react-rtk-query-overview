import { useSelector, useDispatch } from 'react-redux';

import { Typography, Box, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { selectTheme, toggleTheme } from '../theme/slice/themeSlice';
import { useAppDispatch, useAppSelector } from '../../app/store/store';

export default function NightModeToggle() {
   const dispatch = useAppDispatch();
   const darkMode = useAppSelector(selectTheme);

   // const theme = useTheme();

   return (
      <>
         <Box
            sx={{
               display: 'flex',
               width: '300px',
               height: '300px',
               alignItems: 'center',
               justifyContent: 'center',
               bgcolor: 'background.default',
               color: 'text.primary',
               p: 3,
            }}
         >
            <Typography>{darkMode ? 'Dark' : 'Light'} Mode</Typography>
            <IconButton
               sx={{ ml: 1 }}
               onClick={() => dispatch(toggleTheme())}
               color="inherit"
            >
               {/*{theme.palette.mode === 'dark' ? (*/}
               {/*   <Brightness7Icon/>*/}
               {/*) : (*/}
               {/*   <Brightness4Icon/>*/}
               {/*)}*/}


               <Brightness4Icon/>

            </IconButton>
         </Box>
      </>
   );
}
// export default NightModeToggle;