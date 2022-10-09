import { Controller, Get, Query } from "@nestjs/common";
import { DetailService } from "./detail.service";

@Controller("detail")
export class DetailController {
  constructor(private readonly detailsService: DetailService) {}

  @Get()
  getProductDetails(@Query("url") url: string) {
    return this.detailsService.getProductDetails(url);
  }
}
