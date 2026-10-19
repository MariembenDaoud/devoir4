import { Injectable } from '@angular/core';
import { Animal } from './animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private animaux: Animal[] = [
    {
      idAnimal: 1,
      nomAnimal: 'Simba',
      espece: 'Lion',
      groupe: 'Mammifères',
      age: 5,
      dateNaissance: '2021-03-15'
    },
    {
      idAnimal: 2,
      nomAnimal: 'Rio',
      espece: 'Aigle royal',
      groupe: 'Oiseaux',
      age: 3,
      dateNaissance: '2023-05-20'
    },
    {
      idAnimal: 3,
      nomAnimal: 'Flash',
      espece: 'Tortue',
      groupe: 'Reptiles',
      age: 8,
      dateNaissance: '2018-07-12'
    }
  ];

  getAnimaux(): Animal[] {
    return this.animaux;
  }

  ajouterAnimal(animal: Animal): void {
    this.animaux.push(animal);
  }

  modifierAnimal(animalModifie: Animal): void {
    const index = this.animaux.findIndex(
      animal => animal.idAnimal === animalModifie.idAnimal
    );

    if (index !== -1) {
      this.animaux[index] = { ...animalModifie };
    }
  }

  supprimerAnimal(id: number): void {
    this.animaux = this.animaux.filter(
      animal => animal.idAnimal !== id
    );
  }
}