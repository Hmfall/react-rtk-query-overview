export type TOrderBy = 'featured' | 'latest' | 'oldest'
   | 'position' | 'relevant' | 'popular';

export type TOrientation = 'landscape' | 'portrait' | 'squarish';

export type TColor = 'black_and_white' | 'black' |
   'white' | 'yellow' | 'orange' | 'red' | 'purple' | 'magenta'
   | 'green' | 'teal' | 'blue';

export type TParamsValues = TOrderBy
   | TOrientation | TColor;

export interface OptionItem<T> {
   label: string;
   value: T;
}

export interface Param<T> {
   label: string;
   options: {
      default: OptionItem<T>;
      optional: OptionItem<T>[];
   };
}

export interface ValidParams {
   order_by: {
      label: string,
      values: {
         position: OptionItem<TOrderBy>;
         featured: OptionItem<TOrderBy>;
         latest: OptionItem<TOrderBy>;
         oldest: OptionItem<TOrderBy>;
         relevant: OptionItem<TOrderBy>;
         popular: OptionItem<TOrderBy>;
      }
   },
   orientation: {
      label: string,
      values: {
         landscape: OptionItem<TOrientation>;
         portrait: OptionItem<TOrientation>;
         squarish: OptionItem<TOrientation>;
      }
   }
}

export interface TopicsParams {
   order_by: Param<TOrderBy>;
}

export interface TopicsPhotosParams {
   order_by: Param<TOrderBy>;
   orientation: Param<TOrientation>;
}

export interface CollectionsPhotosParams {
   orientation: Param<TOrientation>;
}

export interface EditorialFeedParams {
   order_by: Param<TOrderBy>;
}

export interface SearchPhotosParams {
   query?: string;
   order_by: Param<TOrderBy>;
   collections?: string[];
   color?: Param<TColor>;
   orientation: Param<TOrientation>;
   slug?: string;
}