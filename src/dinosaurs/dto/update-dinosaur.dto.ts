import { PartialType } from '@nestjs/mapped-types';
import { CreateDinosourDto } from './create-dinosaur.dto';

export class UpdateDinosaurDto extends PartialType(CreateDinosourDto) {}
