import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetPhotosBySearchQuery } from '../../features/photos/photosSlice';
import { useGetCollectionPhotosQuery } from '../../features/collections/collectionsSlice';
import { TOrderBy, TOrientation } from '../constants/params/types';
import { COLLECTIONS_PHOTOS_PARAMS, SEARCH_PHOTOS_PARAMS, TOPICS_PHOTOS_PARAMS } from '../constants/params';
import PhotoGrid from '../../features/photos/components/PhotoGrid';
import BaseSelect from './BaseSelect';
import { Box } from '@mui/material';
import Flexbox from './Flexbox';

const Search = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   // const query = searchParams.get('query') || '';
   //
   // console.log(query);
   //


   const [page, setPage] = useState(1);
   const [byOrientation, setByOrientation] = useState<TOrientation>(
      SEARCH_PHOTOS_PARAMS.orientation.options.default.value,
   );

   const [byOrder, setByOrder] = useState<TOrderBy>(
      SEARCH_PHOTOS_PARAMS.order_by.options.default.value,
   );

   const handleSetByOrientation = (orientation: TOrientation) => {
      // setSearchParams({ orientation });
      setByOrientation(orientation);
   };


   const handleSetByOrder = (order_by: TOrderBy) => {
      // setSearchParams({ order_by });
      setByOrder(order_by);
   };

   // useEffect(() => {
   //    setSearchParams({ order_by: byOrder, orientation: byOrientation });
   //    setSearchParams({ order_by: byOrder, orientation: byOrientation });
   // }, [byOrder, byOrientation]);

   const {
      data: photos,
      isLoading,
      isSuccess,
      isError,
   } = useGetPhotosBySearchQuery({
      query: 'nature',
      page,
      order_by: byOrder,
      orientation: byOrientation,
   });

   console.log('Search', photos);

   return (
      <Box>
         {isSuccess && (
            <Box>
               <Flexbox>
                  <BaseSelect<TOrderBy>
                     value={byOrder}
                     onChange={handleSetByOrder}
                     options={SEARCH_PHOTOS_PARAMS.order_by}
                  />
                  <BaseSelect<TOrientation>
                     value={byOrientation}
                     // onChange={orientation => setByOrientation(orientation)}
                     onChange={handleSetByOrientation}
                     options={SEARCH_PHOTOS_PARAMS.orientation}
                  />
               </Flexbox>
               <PhotoGrid
                  isLoading={isLoading}
                  photos={photos.results}
               />
            </Box>
         )}
      </Box>
   );
};

export default Search;