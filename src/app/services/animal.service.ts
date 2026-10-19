import { Injectable } from '@angular/core';
import { Animal } from '../model/animal.model';
import { Groupe } from '../model/groupe.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  animaux : Animal[];
  groupes : Groupe[];

  constructor() {
    // Liste élargie des groupes (catégories)
    this.groupes = [
      { idGroupe: 1, nomGroupe: "Mammifère" },
      { idGroupe: 2, nomGroupe: "Oiseau" },
      { idGroupe: 3, nomGroupe: "Reptile" },
      { idGroupe: 4, nomGroupe: "Amphibien" },
      { idGroupe: 5, nomGroupe: "Poisson" }
    ];

    this.animaux = [
      { idAnimal: 1, nomAnimal: "Simba", especeAnimal: "Lion", dateNaissance: new Date("01/14/2011"), groupe: { idGroupe: 1, nomGroupe: "Mammifère" } },
      { idAnimal: 2, nomAnimal: "Dumbo", especeAnimal: "Éléphant", dateNaissance: new Date("12/17/2010"), groupe: { idGroupe: 1, nomGroupe: "Mammifère" } },
      { idAnimal: 3, nomAnimal: "Bambi", especeAnimal: "Cerf", dateNaissance: new Date("02/20/2020"), groupe: { idGroupe: 1, nomGroupe: "Mammifère" } }
    ];
   }

  listeAnimaux(): Animal[] {
    return this.animaux;
  }

  ajouterAnimal(ani: Animal) {
    this.animaux.push(ani);
  }

  supprimerAnimal(ani: Animal) {
    const index = this.animaux.indexOf(ani, 0);
    if (index > -1) {
      this.animaux.splice(index, 1);
    }
  }

  consulterAnimal(id: number): Animal {
    return this.animaux.find(a => a.idAnimal == id)!;
  }

  updateAnimal(ani: Animal) {
    this.supprimerAnimal(ani);
    this.ajouterAnimal(ani);
  }

  listeGroupes(): Groupe[] {
    return this.groupes;
  }

  consulterGroupe(id: number): Groupe {
    return this.groupes.find(g => g.idGroupe == id)!;
  }
}