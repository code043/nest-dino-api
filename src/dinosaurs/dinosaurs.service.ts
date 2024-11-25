import { Injectable } from '@nestjs/common';
import { CreateDinosaurDto } from './dto/create-dinosaur.dto';
import { UpdateDinosaurDto } from './dto/update-dinosaur.dto';

@Injectable()
export class DinosaursService {
  private dinosaurs = [
    {
      id: 0,
      name: 'Tiranossauro Rex',
      image: './trex.jpeg',
      period: 'Cretáceo Superior (cerca de 68 a 66 milhões de anos atrás)',
      diet: 'carnívoro',
      size: 'Um dos maiores carnívoros terrestres, com cerca de 12 metros de comprimento e 4 metros de altura nos quadris.',
      weight: 'Estima-se entre 8 e 14 toneladas.',
      habitat:
        'Florestas temperadas da América do Norte (atual Estados Unidos e Canadá).',
      characteristics:
        'Dentes serrilhados e poderosos, braços curtos, crânio maciço, visão binocular excelente.',
    },
  ];
  getDinosaurs(diet?: 'carnívoro' | 'herbivoro') {
    if (diet) {
      return this.dinosaurs.filter((dino) => dino.diet === diet);
    }
    return this.dinosaurs;
  }
  getDinosaur(id: number) {
    const dinosaur = this.dinosaurs.find((dino) => dino.id === id);
    if (!dinosaur) {
      throw new Error('Dinosaur not found');
    }
    return dinosaur;
  }
  createDinosaur(createDinosaurDto: CreateDinosaurDto) {
    const newDino = {
      ...createDinosaurDto,
      id: Date.now(),
    };
    this.dinosaurs.push(newDino);
    return newDino;
  }
  updateDinosaur(id: number, updateDinosaurDto: UpdateDinosaurDto) {
    this.dinosaurs = this.dinosaurs.map((dino) => {
      if (dino.id === id) {
        return { ...dino, ...updateDinosaurDto };
      }
      return dino;
    });
    return this.getDinosaur(Number(id));
  }
  removeDinosaur(id: number) {
    const toBeRemoved = this.getDinosaur(id);
    this.dinosaurs = this.dinosaurs.filter((dino) => dino.id !== id);
    return toBeRemoved;
  }
}
