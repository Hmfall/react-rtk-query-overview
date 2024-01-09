import React from 'react';
import { Box, FormControl, InputLabel, MenuItem } from '@mui/material';
import Select from '@mui/material/Select';
import { Param } from '../../constants/params/types';

interface BaseSelectProps<T> {
   options: Param<T>;
   value: T;
   onChange: (value: T) => void;
}

const BaseSelect1 = <T extends string | undefined, >({
   options,
   value,
   onChange,
}: BaseSelectProps<T>) => {

   return (
      <Box>
         <FormControl fullWidth>
            <InputLabel>
               {options.label}
            </InputLabel>
            <Select
               value={value}
               defaultValue={options.options.default.value as T}
               onChange={event => onChange(event.target.value as T)}
            >
               {[(options).options.default,
                  ...(options).options.optional,
               ].map((param) => (
                  <MenuItem key={param.value} value={param.value}>
                     {param.label}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      </Box>
   );
};

export default BaseSelect1;