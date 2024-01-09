import React, { FC, useState } from 'react';
import { Box, Pagination } from '@mui/material';
import { useParams, useSearchParams } from 'react-router-dom';

import { useGetTopicPhotosQuery } from '../topicsSlice';
import PhotoGrid from '../../photos/components/PhotoGrid';
import Error from '../../../common/components/Error';
import { TOPICS_PHOTOS_PARAMS } from '../../../common/constants/params';
import BaseSelect from '../../../common/components/BaseSelect';
import { TOrderBy, TOrientation } from '../../../common/constants/params/types';
import Flexbox from '../../../common/components/Flexbox';

const Topic: FC = () => {
   const { id } = useParams<{ id?: string }>();
   const [page, setPage] = useState(1);
   const [searchParams, setSearchParams] = useSearchParams();

   const orientation = (
      searchParams.get('orientation') ||
      TOPICS_PHOTOS_PARAMS.orientation.options.default.value
   ) as TOrientation;

   const order_by = (
      searchParams.get('order_by') ||
      TOPICS_PHOTOS_PARAMS.order_by.options.default.value
   ) as TOrderBy;

   const {
      data: photos,
      isLoading,
      isSuccess,
      isError,
   } = useGetTopicPhotosQuery({
      page,
      id,
      orientation,
      order_by,
   });

   if (isError) {
      return <Error/>;
   }

   return (
      <Box>
         {isSuccess && (
            <Box>
               <Box>
                  <Flexbox>
                     <BaseSelect<TOrderBy>
                        value={order_by}
                        onChange={order_by => setSearchParams({
                           order_by,
                           orientation
                        })}
                        options={TOPICS_PHOTOS_PARAMS.order_by}
                     />
                     <BaseSelect<TOrientation>
                        value={orientation}
                        onChange={orientation => setSearchParams({
                           order_by,
                           orientation
                        })}
                        options={TOPICS_PHOTOS_PARAMS.orientation}
                     />
                  </Flexbox>
               </Box>
               <Box>
                  <PhotoGrid
                     isLoading={isLoading}
                     photos={photos}
                  />
               </Box>
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

export default Topic;