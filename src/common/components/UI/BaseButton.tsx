import React, { ReactNode, FC } from 'react';
import { Button } from '@mui/material';
import useThemeProps from '../../hooks/useThemeProps';

interface BaseButtonProps {
   children: ReactNode;
   variant?: 'contained' | 'outlined';
   rounded?: boolean;
}

const BaseButton: FC<BaseButtonProps> = ({ children, variant = 'contained', rounded = false }) => {
   const { palette, borderRadius, shadows } = useThemeProps();

   return (
      <Button
         disableRipple={true}
         variant={variant}
         sx={{
            border: `1px solid ${palette.secondary.main}`,
            textTransform: 'none',
            borderRadius: rounded ? `${borderRadius.rounded}` : `${borderRadius.main}`,
            padding: '6px 22px',
            boxShadow: 'none',
            '&:hover': {},
         }}
      >
         {children}
      </Button>
   );

};

export default BaseButton;