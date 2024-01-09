import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PhotoGrid from '../../photos/components/PhotoGrid';
import { useGetCollectionPhotosQuery } from '../collectionsSlice';
import { Box, Pagination } from '@mui/material';
import Error from '../../../common/components/Error';
import { TOrderBy, TOrientation } from '../../../common/constants/params/types';
import { COLLECTIONS_PHOTOS_PARAMS, EDITORIAL_FEED_PARAMS } from '../../../common/constants/params';
import BaseSelect from '../../../common/components/BaseSelect';

const Collection = () => {
   const { id } = useParams<{ id: string }>();
   const [page, setPage] = useState(1);
   const [byOrientation, setByOrientation] = useState<TOrientation>(
      COLLECTIONS_PHOTOS_PARAMS.orientation.options.default.value,
   );

   const {
      data: photos,
      isLoading,
      isSuccess,
      isError,
   } = useGetCollectionPhotosQuery({
      id,
      page,
      orientation: byOrientation,
   });

   if (isError) {
      return <Error/>;
   }

   return (
      <Box>
         {isSuccess && (
            <Box>
               <PhotoGrid
                  isLoading={isLoading}
                  photos={photos}
               />
               <BaseSelect<TOrientation>
                  value={byOrientation}
                  onChange={orientation => setByOrientation(orientation)}
                  options={COLLECTIONS_PHOTOS_PARAMS.orientation}
               />
               <Pagination
                  count={30}
                  page={page}
                  onChange={(_, num) => setPage(num)}
               />
            </Box>
         )}
      </Box>
   );
};

export default Collection;