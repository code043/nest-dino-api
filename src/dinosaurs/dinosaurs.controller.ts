import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { CreateDinosaurDto } from './dto/create-dinosaur.dto';
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
    try {
      return this.dinosaursService.getDinosaur(Number(id));
    } catch (err: any) {
      console.log(err);
      throw new NotFoundException();
    }
  }
  @Post()
  createDinosaur(@Body() createDino: CreateDinosaurDto) {
    return this.dinosaursService.createDinosaur(createDino);
  }
  @Put(':id')
  updateDinosaur(
    @Param('id') id: string,
    @Body() updateDinosaurDto: UpdateDinosaurDto,
  ) {
    return this.dinosaursService.updateDinosaur(Number(id), updateDinosaurDto);
  }
  @Delete(':id')
  removeDinosaur(@Param('id') id: string) {
    return this.dinosaursService.removeDinosaur(Number(id));
  }
}
