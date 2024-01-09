import React, { FC, useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useGetTopicsQuery } from '../topicsSlice';
import TopicsСard from '../components/TopicСard';
import { Topic } from '../types';
import { TOPICS_PARAMS } from '../../../common/constants/params';
import { TOrderBy } from '../../../common/constants/params/types';
import BaseSelect from '../../../common/components/BaseSelect';

const Topics: FC = () => {
   const [byOrder, setByOrder] = useState<TOrderBy>(
      TOPICS_PARAMS.order_by.options.default.value,
   );

   const {
      data: topics,
      isLoading,
      isError,
   } = useGetTopicsQuery({
      page: 1,
      order_by: byOrder,
   });

   console.log(topics);

   return (
      <Container maxWidth={'xl'}>
         <Box>
            <Typography variant="mainTitle">
               Topics
            </Typography>
            <Typography>
               Explore the world through topics of beautiful photos.
            </Typography>
         </Box>
         <BaseSelect<TOrderBy>
            value={byOrder}
            onChange={order => setByOrder(order)}
            options={TOPICS_PARAMS.order_by}
         />
         <Grid
            container
            spacing={{ xs: 6, lg: 6 }}
         >
            {topics?.map((topic: Topic) => (
               <Grid
                  item
                  key={topic.id}
                  xs={12} md={6} lg={4}
               >
                  <TopicsСard
                     key={topic.id}
                     topic={topic}
                  />
               </Grid>
            ))}
         </Grid>
      </Container>
   );
};

export default Topics;