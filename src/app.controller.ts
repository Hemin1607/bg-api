import { Controller, Get, Post, Req, Query, Headers } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('test/:id')
  postHello(
    @Req() { body, params }: Request,
    @Query() { tets }: any,
    @Headers() headers,
  ): string {
    console.log(body);
    console.log(params);
    console.log(headers);
    console.log(tets);
    return this.appService.getHello();
  }
}
