import React from 'react';
import { Box, Input } from '@mui/material';
import { palette } from '../../theme/palette';
import useThemeProps from '../../hooks/useThemeProps';


const BaseInput = () => {
   const { palette } = useThemeProps();

   return (
      <Box
         sx={{ width: '100%', height: '100%' }}
      >
         <Input
            sx={{
               backgroundColor: palette.background.accent,
               height: '100%',
               borderRadius: 6,
               padding: '10px 20px',
               '&:hover': {},
            }}
         />
      </Box>

   );
};

export default BaseInput;