export interface ILogItem {
  _id: string;
  ip: string;
  date: string;
  country: string;
  region: string;
  city: string;
  source: string;
  responseSize: number;
  method: string;
  url: string;
  protocol: string;
  statusCode: number;
}

interface PaginationMeta {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export interface ILogTableDataResponse {
  items: ILogItem[];
  meta: PaginationMeta;
}
