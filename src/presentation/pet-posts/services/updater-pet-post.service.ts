import { User } from '../../../data';

export class UpdaterPetPostService {
  async execute(id: string, updates: Partial<User>) {
    const petPost = await User.findOneBy({ id });

    if (!petPost) throw new Error('The pet was not found');

    Object.assign(petPost, updates);

    return await petPost.save();
  }
}
