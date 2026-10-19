import { Groupe } from "./groupe.model";

export class Animal {
  idAnimal!: number;
  nomAnimal!: string;
  especeAnimal!: string;
  dateNaissance!: Date;
  groupe!: Groupe;
}