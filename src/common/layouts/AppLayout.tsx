import React, { useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import useThemeProps from '../hooks/useThemeProps';
import Header from '../components/Header';
import Flexbox from '../components/Flexbox';


const AppLayout = () => {
   const { palette } = useThemeProps();
   // const [mode, setMode] = useState<string>('light');
   // const darkMode = useAppSelector(selectTheme);

   // useMemo(() => {
   //    if (darkMode) setMode('dark');
   //    else setMode('light');
   // }, [darkMode]);
   //
   // const theme = useMemo(() => getTheme(mode), [mode]);

   return (
      <Box sx={{ backgroundColor: palette.background.main, minHeight: '100vh' }}>
         <Header/>
         <Flexbox component="main" sx={{ background: palette.background.main }}>
            <Outlet/>
         </Flexbox>
      </Box>
   );
};

export default AppLayout;