import React, { FC } from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/material';
import { Photo } from '../types';

interface PhotoCardProps {
   photo: Photo;
}

const PhotoCard: FC<PhotoCardProps> = ({ photo }) => {

   return (
      <div>
         <ImageListItem>
            <Box>
               <img
                  // srcSet={`
                  //    ${photo.urls.regular}?auto=format&fit=crop&w=768 700w,
                  //    ${photo.urls.regular}?auto=format&fit=crop&w=992 900w,
                  //    ${photo.urls.regular}?auto=format&fit=crop&w=1200 1200w,
                  // `}
                  // sizes={`
                  //    (min-width: ${breakpoints.xs}) 768px,
                  //    (min-width: ${breakpoints.md}px) 992px,
                  //    (min-width: ${breakpoints.lg}px) 1200px,
                  // `}
                  srcSet={`
                     ${photo.urls.regular}?auto=format&fit=crop&w=500 500w,
                  `}
                  loading="lazy"
               />
            </Box>
         </ImageListItem>
      </div>
   );
};

export default PhotoCard;