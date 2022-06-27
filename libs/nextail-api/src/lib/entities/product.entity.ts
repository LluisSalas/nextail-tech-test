export interface NextailProduct {
  code: number;
  name: string;
  price: number;
  sales_ranking: number;
  stockout_rate: number;
  wh_coverage: number;
  size_stock: { [key: string]: number };
}
