import { CLIENT_ID } from '../../common/constants';
import { unsplashApi } from '../../app/store/apiSlice';
import { Collection, CollectionPhotosRequest } from './types';
import { Photo } from '../photos/types';
import { Pagination } from '../../common/types/common';

const extendedApi = unsplashApi.injectEndpoints({
   endpoints: (builder) => ({
      getCollections: builder.query<Collection[], Pagination>({
         query: ({ page }) => ({
            url: '/collections',
            params: { page, client_id: CLIENT_ID },
         }),
      }),
      getCollectionPhotos: builder.query<Photo[], CollectionPhotosRequest>({
         query: ({ id, page, orientation }) => ({
            url: `/collections/${id}/photos`,
            params: { page, orientation, client_id: CLIENT_ID },
         }),
      }),
   }),
});

export const {
   useGetCollectionsQuery,
   useGetCollectionPhotosQuery,
} = extendedApi;