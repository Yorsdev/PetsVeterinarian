import { PetPost } from '../../../data';

export class UpdaterPetPostService {
  async execute(id: string, updates: Partial<PetPost>) {
    const petPost = await PetPost.findOneBy({ id });
    const allowedStatus = ['pending', 'approved', 'rejected'];

    if (updates.status && !allowedStatus.includes(updates.status)) {
      throw new Error('Invalid status value');
    }
    if (!petPost) throw new Error('The pet was not found');

    Object.assign(petPost, updates);

    return await petPost.save();
  }
}
