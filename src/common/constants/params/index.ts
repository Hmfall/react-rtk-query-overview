import {
   ValidParams,
   TopicsPhotosParams,
   EditorialFeedParams,
   CollectionsPhotosParams,
   TopicsParams,
   SearchPhotosParams,
} from './types';

const params: ValidParams = {
   order_by: {
      label: 'Order by',
      values: {
         position: { label: 'Position', value: 'position' },
         featured: { label: 'Featured', value: 'featured' },
         latest: { label: 'Latest', value: 'latest' },
         oldest: { label: 'Oldest', value: 'oldest' },
         relevant: { label: 'Relevant', value: 'relevant' },
         popular: { label: 'Popular', value: 'popular' },
      },
   },
   orientation: {
      label: 'Orientation',
      values: {
         landscape: { label: 'Landscape', value: 'landscape' },
         portrait: { label: 'Portrait', value: 'portrait' },
         squarish: { label: 'Squarish', value: 'squarish' },
      },
   },
};

export const TOPICS_PARAMS: TopicsParams = {
   order_by: {
      label: params.order_by.label,
      options: {
         default: params.order_by.values.position,
         optional: [
            params.order_by.values.featured,
            params.order_by.values.latest,
            params.order_by.values.oldest,
         ],
      },
   },
};

export const TOPICS_PHOTOS_PARAMS: TopicsPhotosParams = {
   order_by: {
      label: params.order_by.label,
      options: {
         default: params.order_by.values.latest,
         optional: [
            params.order_by.values.oldest,
            params.order_by.values.popular,
         ],
      },
   },
   orientation: {
      label: params.orientation.label,
      options: {
         default: params.orientation.values.landscape,
         optional: [
            params.orientation.values.portrait,
            params.orientation.values.squarish,
         ],
      },
   },
};

export const COLLECTIONS_PHOTOS_PARAMS: CollectionsPhotosParams = {
   orientation: {
      label: params.orientation.label,
      options: {
         default: params.orientation.values.landscape,
         optional: [
            params.orientation.values.portrait,
            params.orientation.values.squarish,
         ],
      },
   },
};

export const EDITORIAL_FEED_PARAMS: EditorialFeedParams = {
   order_by: {
      label: params.order_by.label,
      options: {
         default: params.order_by.values.latest,
         optional: [
            params.order_by.values.oldest,
            params.order_by.values.popular,
         ],
      },
   },
};


export const SEARCH_PHOTOS_PARAMS: SearchPhotosParams = {
   order_by: {
      label: params.order_by.label,
      options: {
         default: params.order_by.values.relevant,
         optional: [
            params.order_by.values.latest,
         ],
      },
   },
   orientation: {
      label: params.orientation.label,
      options: {
         default: params.orientation.values.landscape,
         optional: [
            params.orientation.values.portrait,
            params.orientation.values.squarish,
         ],
      },
   },
};


export const SEARCH_PHOTOS_PARAMS_ = {
   order_by: {
      label: params.order_by.label,
      //@ts-ignore
      options: [
         params.order_by.values.latest,
         params.order_by.values.relevant,
      ],
   },
};