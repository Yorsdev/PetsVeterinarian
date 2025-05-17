import { PetPost } from '../../../data';

export class CreatorPetPostService {
  async execute(data: any) {
    if (
      !data.petName ||
      typeof data.petName !== 'string' ||
      !data.description ||
      typeof data.description !== 'string' ||
      !data.image_url ||
      typeof data.image_url !== 'string'
    ) {
      throw new Error(
        'petName, description, and image_url are required and must be strings'
      );
    }

    const petPost = new PetPost();

    petPost.petName = data.petName.trim().toLowerCase();
    petPost.description = data.description.trim().toLowerCase();
    petPost.image_url = data.image_url.trim();

    try {
      return await petPost.save();
    } catch (error) {
      console.error('Error creating pet post:', error);
      throw new Error('Error creating pet post');
    }
  }
}
