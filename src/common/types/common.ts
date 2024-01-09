export type Nullable<T> = T | null;

export interface Entity {
   id: string;
}

export interface Tag {
   type: string;
   title: string;
   source?: any;
}

export interface Pagination {
   page: number;
   per_page?: number;
}

export interface ExtendedResponse<T> extends Pagination {
   total: number;
   total_pages: number;
   results: T[];
}

