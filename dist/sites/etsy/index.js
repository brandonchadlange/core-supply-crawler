"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crawlProduct = async (page) => {
    await page.waitForSelector("#content");
    const title = await page.$eval("h1", (text) => text.innerText);
    const price = await page.$eval("[data-buy-box-region='price'] > div > div > p", (element) => element.childNodes.length === 1
        ? element.textContent
        : element.children[1].innerText);
    return {
        title,
        price,
    };
};
const searchProduct = async (page) => {
    return {
        title: "",
        price: "",
    };
};
const Etsy = {
    crawlProduct,
    searchProduct,
};
exports.default = Etsy;
//# sourceMappingURL=index.js.map