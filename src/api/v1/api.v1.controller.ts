import { Controller, Get } from '@nestjs/common';

@Controller()
export class ApiV1Controller {
  @Get('health_check')
  healthCheck() {
    return 'I am alive';
  }
}