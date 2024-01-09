import { Nullable, Entity, Tag, Pagination } from '../../common/types/common';

export interface Collection extends Entity {
   cover_photo: Nullable<any>;
   description: Nullable<string>;
   featured: boolean;
   last_collected_at: string;
   links: {
      self: string;
      html: string;
      photos: string;
      download?: string;
      related?: string;
   };
   preview_photos: Nullable<any>;
   private: boolean;
   published_at: string;
   share_key: Nullable<string>;
   tags: Tag[];
   title: string;
   total_photos: number;
   updated_at: string;
   user: Nullable<any>;
}

export interface CollectionPhotosRequest extends Pagination {
   id?: string;
   orientation?: string;
}