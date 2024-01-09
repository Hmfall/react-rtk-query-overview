import { Nullable, Entity } from '../../common/types/common';
import { Pagination, Tag } from '../../common/types/common';
import { TColor } from '../../common/constants/params/types';

export interface Photo extends Entity {
   alt_description?: Nullable<string>;
   blur_hash: Nullable<string>;
   breadcrumbs: any[];
   color: Nullable<string>;
   created_at: string;
   current_user_collections: any[];
   description: Nullable<string>;
   height: number;
   liked_by_user: boolean;
   likes: number;
   links: {
      download: string;
      download_location: string;
      html: string;
      self: string;
   };
   promoted_at: Nullable<string>;
   slug: Nullable<string>;
   sponsorship: Nullable<any>;
   tags: Tag[];
   topic_submissions: Nullable<any>;
   updated_at: string;
   urls: {
      full: string;
      raw: string;
      regular: string;
      small: string;
      thumb: string;
   };
   user: any;
   width: number;
}

export interface PhotosVeryBasic extends Entity {
   created_at: string;
   updated_at: string;
   urls: {
      full: string;
      raw: string;
      regular: string;
      small: string;
      thumb: string;
   };
}

export interface PhotosBasicPreview extends PhotosVeryBasic {
   slug: string;
   blur_hash: Nullable<string>;
}

export interface PhotoBasic extends PhotosVeryBasic {
   alt_description: Nullable<string>;
   blur_hash: Nullable<string>;
   breadcrumbs: any[];
   color: Nullable<string>;
   current_user_collections: any[];
   description: Nullable<string>;
   height: number;
   likes: number;
   links: {
      self: string;
      html: string;
      download: string;
      download_location: string;
   };
   slug: Nullable<string>;
   sponsorship: Nullable<any>;
   liked_by_user: boolean;
   promoted_at: Nullable<string>;
   topic_submissions: Nullable<any>;
   width: number;
   user: any;
}

export interface PhotosRequest extends Pagination {
   query?: Nullable<string>;
   order_by?: Nullable<string>;
   collections?: Nullable<string>;
   color?: TColor;
   orientation?: Nullable<string>;
   slug?: string;
}

export interface PhotosFeedRequest extends Pagination {
   order_by: Nullable<string>;
}