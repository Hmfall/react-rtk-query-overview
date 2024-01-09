import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import Flexbox from './Flexbox';
import SearchComp from './SearchComp';
import HeaderSearch from './HeaderSearch';
import Drawer from '@mui/material/Drawer';
import TemporaryDrawer from './TemporaryDrawer';
import { useTheme } from '@mui/material';
import Input from './UI/BaseInput';
import HeaderSearchBar from './HeaderSearchBar';
import BaseButton from './UI/BaseButton';
import useThemeProps from '../hooks/useThemeProps';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
   const { theme, palette } = useThemeProps();
   const navigate = useNavigate();
   const isMobile = useMediaQuery({ maxWidth: theme.breakpoints.values.md });
   // console.log(isMobile);

   return (
      <Box
         component="header"
         sx={{
            backgroundColor: palette.background.main,
            // borderBottom: '1px solid black',
            height: '60px',
         }}
      >
         <Container maxWidth="xl">
            <Flexbox
               sx={{
                  height: '60px',
                  alignItems: 'center',
               }}
            >
               <Flexbox
                  sx={{
                     flex: '0 0 auto',
                     alignItems: 'center',
                  }}
               >
                  <Box mr={8} onClick={() => navigate('/topics')}>
                     <Typography component="a">
                        Topics
                     </Typography>
                  </Box>
                  <Box onClick={() => navigate('/collections')}>
                     <Typography component="a">
                        Collections
                     </Typography>
                  </Box>
               </Flexbox>
               <Flexbox sx={{ flex: '1 1 100%' }}>
                  <Flexbox sx={{ width: '100%', padding: '0 15px ' }}>
                     <HeaderSearchBar/>
                  </Flexbox>
               </Flexbox>
               <Flexbox sx={{ flex: '0 0 auto' }}>
                  <Box sx={{ marginRight: '12px' }}>
                     <BaseButton rounded={true}>
                        Sign in
                     </BaseButton>
                  </Box>
                  <Box>
                     <BaseButton rounded={true}>
                        Sign up
                     </BaseButton>
                  </Box>
               </Flexbox>
            </Flexbox>
         </Container>
      </Box>
   );
};

export default Header;