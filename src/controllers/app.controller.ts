import { Controller, Get, Query } from '@nestjs/common';
import { GetProductValidator } from '@/validators/product.validator';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getProduct')
  getProduct(@Query() query: GetProductValidator) {
    return this.appService.getProduct(query);
  }
}
