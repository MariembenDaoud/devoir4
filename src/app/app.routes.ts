import { Routes } from '@angular/router';
import { Animaux } from './animaux/animaux';
import { AddAnimal } from './add-animal/add-animal';
import { UpdateAnimal } from './update-animal/update-animal';

export const routes: Routes = [
  { path: 'animaux', component: Animaux },
  { path: 'add-animal', component: AddAnimal },
  { path: 'update-animal/:id', component: UpdateAnimal },
  // Cette ligne permet de rediriger automatiquement la racine vers /animaux
  { path: '', redirectTo: 'animaux', pathMatch: 'full' }
];