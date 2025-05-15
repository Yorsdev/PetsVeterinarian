import { PetPost } from '../../../data';
import { FinderPetPostService } from './finder-pet-post.service';

export class DeletePetPostService {
  async execute(id: string) {
    const pet = await PetPost.findOneBy({ id });

    if (!pet) throw new Error('Pet post not found');

    await pet.remove();
  }
}
