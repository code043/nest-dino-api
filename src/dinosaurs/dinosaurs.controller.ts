import { Controller, Get } from '@nestjs/common';

@Controller('dinosaurs')
export class DinosaursController {
  @Get()
  getDinosaurs(): any[] {
    return [];
  }
}
