import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { CreateDinosourDto } from './dto/create-dinosaur.dto';
import { UpdateDinosaurDto } from './dto/update-dinosaur.dto';
import { DinosaursService } from './dinosaurs.service';

@Controller('dinosaurs')
export class DinosaursController {
  constructor(private readonly dinosaursService: DinosaursService) {}

  @Get()
  getDinosaurs(@Query('diet') diet: 'carnívoro' | 'herbivoro') {
    return this.dinosaursService.getDinosaurs(diet);
  }
  @Get(':id')
  getOneDinosaur(@Param('id') id: string) {
    return { id };
  }
  @Post()
  createDinosaur(@Body() createDino: CreateDinosourDto) {
    return {
      name: createDino.name,
    };
  }
  @Put(':id')
  updateDinosaur(
    @Param('id') id: string,
    @Body() updateDinosaurDto: UpdateDinosaurDto,
  ) {
    return {
      id,
      name: updateDinosaurDto,
    };
  }
  @Delete(':id')
  removeDinosaur(@Param('id') id: string) {
    return { id };
  }
}
