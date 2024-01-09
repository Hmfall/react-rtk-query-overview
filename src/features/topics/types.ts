import { Entity, Nullable, Pagination } from '../../common/types/common';
import { TOrderBy, TOrientation } from '../../common/constants/params/types';
import { PhotoBasic, PhotosBasicPreview } from '../photos/types';

export interface Topic extends Entity {
   cover_photo: PhotoBasic;
   current_user_contributions: any[];
   description: Nullable<string>;
   ends_at: Nullable<string>;
   featured: boolean;
   links: {
      self: string;
      html: string;
      photos: string;
   };
   only_submissions_after: Nullable<string>;
   owners: any;
   preview_photos: PhotosBasicPreview[];
   published_at: string;
   slug: string;
   starts_at: string;
   status: 'open' | 'closed';
   title: string;
   total_current_user_submissions: Nullable<number | string>;
   total_photos: number;
   visibility: string;
   updated_at: string;
}

export interface TopicsRequest extends Pagination {
   ids?: string;
   order_by: TOrderBy;
}

export interface TopicPhotosRequest extends Pagination {
   id: string | undefined;
   orientation: TOrientation;
   order_by: TOrderBy;
}