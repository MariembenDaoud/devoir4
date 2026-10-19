import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'rechercheNom',
  standalone: true
})
export class RechercheNomPipe implements PipeTransform {

  transform(animaux: Animal[] | null, texte: string): Animal[] {
    if (!animaux) {
      return [];
    }

    const recherche = (texte ?? '').trim().toLowerCase();

    if (!recherche) {
      return animaux;
    }

    return animaux.filter(animal =>
      animal.nomAnimal.toLowerCase().includes(recherche)
    );
  }
}