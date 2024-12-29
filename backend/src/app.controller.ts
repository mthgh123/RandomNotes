import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  //constructor(private readonly appService: AppService) {}
  constructor(private appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/jun')
  junhello(): string {
    return this.appService.junHello();
  }
}
