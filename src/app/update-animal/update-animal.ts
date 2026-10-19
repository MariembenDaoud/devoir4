import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../model/animal.model';
import { Groupe } from '../model/groupe.model';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-update-animal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-animal.html',
  styleUrl: './update-animal.css'
})
export class UpdateAnimal implements OnInit {
  currentAnimal = new Animal();
  groupes!: Groupe[];
  updatedIdGroupe!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private animalService: AnimalService
  ) {}

  ngOnInit(): void {
    this.groupes = this.animalService.listeGroupes();
    this.currentAnimal = this.animalService.consulterAnimal(this.activatedRoute.snapshot.params['id']);
    if (this.currentAnimal && this.currentAnimal.groupe) {
      this.updatedIdGroupe = this.currentAnimal.groupe.idGroupe;
    }
  }

  updateAnimal() {
    this.currentAnimal.groupe = this.animalService.consulterGroupe(this.updatedIdGroupe);
    this.animalService.updateAnimal(this.currentAnimal);
    this.router.navigate(['animaux']);
  }
}