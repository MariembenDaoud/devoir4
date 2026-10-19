import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Animal } from '../animal.model';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animaux',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './animaux.html',
  styleUrl: './animaux.css'
})
export class Animaux implements OnInit {

  animaux: Animal[] = [];

  rechercheNom = '';
  groupeSelectionne = '';

  afficherFormulaire = false;
  modeModification = false;

  prochainId = 1;

  animalForm: Animal = this.nouvelAnimal();

  // Options du menu déroulant : à adapter au devoir 4.
  groupes: string[] = [
    'Mammifères',
    'Oiseaux',
    'Reptiles',
    'Poissons',
    'Amphibiens'
  ];

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.chargerAnimaux();
  }

  chargerAnimaux(): void {
    this.animaux = [...this.animalService.getAnimaux()];

    this.prochainId =
      Math.max(0, ...this.animaux.map(a => a.idAnimal)) + 1;
  }

  nouvelAnimal(): Animal {
    return {
      idAnimal: 0,
      nomAnimal: '',
      espece: '',
      groupe: '',
      age: 0,
      dateNaissance: ''
    };
  }

  get animauxFiltres(): Animal[] {
    const recherche = this.rechercheNom.trim().toLowerCase();

    return this.animaux.filter(animal => {
      const nomCorrespond =
        animal.nomAnimal.toLowerCase().includes(recherche);

      const groupeCorrespond =
        this.groupeSelectionne === '' ||
        animal.groupe === this.groupeSelectionne;

      return nomCorrespond && groupeCorrespond;
    });
  }

  ajouterAnimal(): void {
    this.modeModification = false;
    this.animalForm = this.nouvelAnimal();
    this.afficherFormulaire = true;
  }

  modifierAnimal(animal: Animal): void {
    this.modeModification = true;
    this.animalForm = { ...animal };
    this.afficherFormulaire = true;
  }

  enregistrerAnimal(): void {
    if (
      !this.animalForm.nomAnimal.trim() ||
      !this.animalForm.espece.trim() ||
      !this.animalForm.groupe ||
      !this.animalForm.dateNaissance ||
      this.animalForm.age < 0
    ) {
      alert('Veuillez remplir correctement tous les champs.');
      return;
    }

    if (this.modeModification) {
      this.animalService.modifierAnimal({ ...this.animalForm });
    } else {
      const nouvelAnimal: Animal = {
        ...this.animalForm,
        idAnimal: this.prochainId++
      };

      this.animalService.ajouterAnimal(nouvelAnimal);
    }

    this.chargerAnimaux();
    this.fermerFormulaire();
  }

  supprimerAnimal(id: number): void {
    
      this.animalService.supprimerAnimal(id);
      this.chargerAnimaux();
  }
  

  fermerFormulaire(): void {
    this.afficherFormulaire = false;
    this.animalForm = this.nouvelAnimal();
  }
}