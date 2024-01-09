import React, { FC } from 'react';
import { Box } from '@mui/material';
import ImageList from '@mui/material/ImageList';

import { Photo } from '../types';
import PhotoCard from '../components/PhotoCard';

interface PhotoGridProps {
   isLoading: boolean;
   photos: Photo[];
}

const PhotoGrid: FC<PhotoGridProps> = ({ photos, isLoading }) => {

   if (isLoading) {
      if (!isLoading) console.log("34234");
      return <Box>Loading...</Box>;
   }

   return (
      <Box>
         <ImageList
            variant="masonry"
            cols={6}
            gap={20}
         >
            {photos.map((photo: Photo) => (
               <PhotoCard
                  key={photo.id}
                  photo={photo}
               />
            ))}
         </ImageList>
      </Box>
   );
};
export default PhotoGrid;