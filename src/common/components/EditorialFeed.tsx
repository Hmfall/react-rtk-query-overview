import React, { useState } from 'react';
import { useGetEditorialFeedQuery } from '../../features/photos/photosSlice';
import { Box, Pagination } from '@mui/material';

import PhotoGrid from '../../features/photos/components/PhotoGrid';
import Error from './Error';
import { TOrderBy } from '../constants/params/types';
import { EDITORIAL_FEED_PARAMS } from '../constants/params';
import BaseSelect from './BaseSelect';
import ReactPaginate from 'react-paginate';

const EditorialFeed = () => {
   const [page, setPage] = useState(1);
   const [byOrder, setByOrder] = useState<TOrderBy>(
      EDITORIAL_FEED_PARAMS.order_by.options.default.value,
   );

   const {
      data: photos,
      isLoading,
      isError,
      isSuccess,
   } = useGetEditorialFeedQuery({
      page,
      // @ts-ignore
      order_by: byOrder,
   });


   if (isError) {
      return <Error/>;
   }

   return (
      <div>
         {isSuccess && (
            <Box>
               <BaseSelect<TOrderBy>
                  value={byOrder}
                  onChange={order => setByOrder(order)}
                  options={EDITORIAL_FEED_PARAMS.order_by}
               />
               <PhotoGrid
                  isLoading={isLoading}
                  photos={photos}
               />
             <Pagination
                  showLastButton={true}
                  page={page}
                  count={30}
                  onChange={(_, num) => setPage(num)}
               />
            </Box>
         )}
      </div>
   );

};

export default EditorialFeed;