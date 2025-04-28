export interface PaginationDto<T> {
  currentPage: number;
  pageSize: number;
  items: T;
  totalPages: number;
}
