import React from 'react';
import { Input } from '@mui/material';

const BaseInput = () => {
   return (
      <div>
         <Input
            sx={{
               backgroundColor: 'gray',
            }}
         />
      </div>
   );
};

export default BaseInput;