import React from 'react';
import { Box, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Flexbox from './Flexbox';
import useThemeProps from '../hooks/useThemeProps';

const HeaderSearchBar = () => {
   const { palette } = useThemeProps();

   return (
      <Flexbox
         sx={{
            width: '100%',
            height: '40px',
            alignItems: 'center',
            padding: '0 15px',
            borderRadius: 6,
            backgroundColor: palette.background.accent,
         }}
      >
         <Box
            sx={{
               width: '21px',
               height: '21px',
            }}
         >
            <SearchIcon/>
         </Box>
         <Box sx={{ width: '100%' }}>
            <Input
               placeholder={'Search images'}
               sx={{
                  width: '100%',
                  height: '100%',
                  padding: '0 !important',
                  '&:hover': {},
               }}
            />
         </Box>
      </Flexbox>
   );
};

export default HeaderSearchBar;