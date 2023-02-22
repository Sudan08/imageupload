import { Controller, Get, Query } from '@nestjs/common';

@Controller()
export class AppController {
  // @Get()
  // getImage(@Query('imageName') imageName : string, @Res() res: Response) {
  //   // reading the file from the assests folder and sending the file
  //   const file = 
  // }
  @Get()
  getHello(): string {
    return 'Welcome to NestJS!';
  }
}
