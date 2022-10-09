import { Page } from "puppeteer";
import { ProductDetail, ProductListItem, Site } from "../site";

const crawlProduct = async (page: Page): Promise<ProductDetail> => {
  await page.waitForSelector("#content");

  const title = await page.$eval("h1", (text) => text.innerText);

  const price = await page.$eval(
    "[data-buy-box-region='price'] > div > div > p",
    (element: any) =>
      element.childNodes.length === 1
        ? element.textContent
        : element.children[1].innerText
  );

  return {
    title,
    price,
  };
};

const searchProduct = async (page: Page): Promise<ProductListItem> => {
  return {
    title: "",
    price: "",
  };
};

const Etsy: Site = {
  crawlProduct,
  searchProduct,
};

export default Etsy;
