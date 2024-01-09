import { CLIENT_ID, PER_PAGE } from '../../common/constants';
import { unsplashApi } from '../../app/store/apiSlice';
import { Photo, PhotosFeedRequest, PhotosRequest } from './types';
import { ExtendedResponse } from '../../common/types/common';

const extendedApi = unsplashApi.injectEndpoints({
   endpoints: (builder) => ({
      getEditorialFeed: builder.query<Photo[], PhotosFeedRequest>({
         query: ({ page, order_by }) => ({
            url: '/photos',
            params: {
               page,
               order_by,
               per_page: PER_PAGE,
               client_id: CLIENT_ID,
            },
         }),
      }),
      getPhotosBySearch: builder.query<ExtendedResponse<Photo>, PhotosRequest>({
         query: (params) => ({
            url: '/search/photos',
            params: {
               page: params.page,
               per_page: PER_PAGE,
               query: params?.query,
               order_by: params?.order_by,
               collections: params?.collections,
               color: params?.color,
               orientation: params?.orientation,
               client_id: CLIENT_ID,
            },
         }),
      }),
   }),
});

export const {
   useGetEditorialFeedQuery,
   useGetPhotosBySearchQuery,
} = extendedApi;