import { CLIENT_ID, PER_PAGE } from '../../common/constants';
import { unsplashApi } from '../../app/store/apiSlice';
import { Topic, TopicPhotosRequest, TopicsRequest } from './types';
import { Photo } from '../photos/types';

const extendedApi = unsplashApi.injectEndpoints({
   endpoints: (builder) => ({
      getTopics: builder.query<Topic[], TopicsRequest>({
         query: ({ page, order_by }) => ({
            url: '/topics',
            params: {
               page,
               per_page: PER_PAGE,
               order_by,
               client_id: CLIENT_ID,
            },
         }),
      }),
      getTopicPhotos: builder.query<Photo[], TopicPhotosRequest>({
         query: ({ id, page, orientation, order_by }) => ({
            url: `/topics/${id}/photos`,
            params: {
               page,
               per_page: PER_PAGE,
               orientation,
               order_by,
               client_id: CLIENT_ID,
            },
         }),
      }),
   }),
});

export const {
   useGetTopicsQuery,
   useGetTopicPhotosQuery,
} = extendedApi;