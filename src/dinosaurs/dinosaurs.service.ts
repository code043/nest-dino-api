import { Injectable } from '@nestjs/common';

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
      return this.dinosaurs.filter((dinosaur) => dinosaur.diet === diet);
    }
    return this.dinosaurs;
  }
}
