import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateDinosourDto } from './dto/create-dinosaur.dto';
import { UpdateDinosaurDto } from './dto/update-dinosaur.dto';

@Controller('dinosaurs')
export class DinosaursController {
  @Get()
  getDinosaurs(): any[] {
    return [];
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
