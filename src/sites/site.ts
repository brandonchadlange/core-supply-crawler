import { Page } from "puppeteer";

export interface ProductDetail {
  title: string;
  price: string;
}

export interface ProductListItem {
  title: string;
  price: string;
}

export type CrawlProductDetail = (page: Page) => Promise<ProductDetail>;
export type SearchProduct = (page: Page) => Promise<ProductListItem>;

export interface Site {
  crawlProduct: CrawlProductDetail;
  searchProduct: SearchProduct;
}
