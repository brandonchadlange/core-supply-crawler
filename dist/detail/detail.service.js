"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailService = void 0;
const common_1 = require("@nestjs/common");
const puppeteer = require("puppeteer");
const sites_1 = require("../sites");
let DetailService = class DetailService {
    async getProductDetails(url) {
        const browser = await puppeteer.launch({
            headless: true,
            args: ["--disable-setuid-sandbox"],
            ignoreHTTPSErrors: true,
        });
        let page = await browser.newPage();
        await page.goto(url);
        const site = new URL(url).hostname;
        const handler = sites_1.default[site].crawlProduct;
        const handlerResponse = await handler(page);
        return handlerResponse;
    }
};
DetailService = __decorate([
    (0, common_1.Injectable)()
], DetailService);
exports.DetailService = DetailService;
//# sourceMappingURL=detail.service.js.map