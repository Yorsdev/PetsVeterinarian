import { PetPostStatus } from '../../../data';
import { FinderPetPostService } from './finder-pet-post.service';

export class ApprovePetPostService {
  constructor(private readonly finderPetPostWervice: FinderPetPostService) {}

  async execute(id: string) {
    const petPost = await this.finderPetPostWervice.executeByFindOne(id);

    if (petPost.status === 'approved') {
      return {
        message: 'Pet post already approved',
      };
    }
    petPost.status = PetPostStatus.APPROVED;

    try {
      await petPost.save();
      return {
        message: 'Pet post approved successfully',
      };
    } catch (error) {
      throw new Error('Error approving pet post');
    }
  }
}
