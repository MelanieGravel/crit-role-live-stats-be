import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class ApiController {
  @Get('hello')
  getHello(): string {
    return 'Hello from REST API!';
  }
}
