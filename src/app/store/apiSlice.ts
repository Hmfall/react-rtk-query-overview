import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../../common/constants/index';

export const unsplashApi = createApi({
   reducerPath: 'unsplashApi',
   baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
   endpoints: (builder) => ({}),
});