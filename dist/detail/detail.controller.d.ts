import { DetailService } from "./detail.service";
export declare class DetailController {
    private readonly detailsService;
    constructor(detailsService: DetailService);
    getProductDetails(url: string): Promise<import("../sites/site").ProductDetail>;
}
