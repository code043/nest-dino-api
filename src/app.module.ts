import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DinosaursModule } from './dinosaurs/dinosaurs.module';

@Module({
  imports: [DinosaursModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
