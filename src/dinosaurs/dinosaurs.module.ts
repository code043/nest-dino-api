import { Module } from '@nestjs/common';
import { DinosaursController } from './dinosaurs.controller';
import { DinosaursService } from './dinosaurs.service';

@Module({
  controllers: [DinosaursController],
  providers: [DinosaursService],
})
export class DinosaursModule {}
