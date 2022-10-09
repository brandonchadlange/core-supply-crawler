import { Injectable } from "@nestjs/common";
import * as puppeteer from "puppeteer";
import sites, { RegisteredSite } from "src/sites";

@Injectable()
export class DetailService {
  async getProductDetails(url: string) {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--disable-setuid-sandbox"],
      ignoreHTTPSErrors: true,
    });

    let page = await browser.newPage();
    await page.goto(url);

    const site = new URL(url).hostname as RegisteredSite;

    const handler = sites[site].crawlProduct;

    const handlerResponse = await handler(page);

    return handlerResponse;
  }
}
