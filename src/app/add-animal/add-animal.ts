import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Animal } from '../model/animal.model';
import { Groupe } from '../model/groupe.model';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-add-animal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-animal.html',
  styleUrl: './add-animal.css'
})
export class AddAnimal implements OnInit {
  newAnimal = new Animal();
  groupes!: Groupe[];
  newIdGroupe!: number;
  newGroupe!: Groupe;
  message!: string;

  constructor(private animalService: AnimalService, private router: Router) {}

  ngOnInit() {
    this.groupes = this.animalService.listeGroupes();
  }

  addAnimal() {
    this.newGroupe = this.animalService.consulterGroupe(this.newIdGroupe);
    this.newAnimal.groupe = this.newGroupe;
    this.animalService.ajouterAnimal(this.newAnimal);
    this.router.navigate(['animaux']);
  }
}