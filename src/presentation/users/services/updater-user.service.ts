import { User } from '../../../data';

export class UpdaterUserService {
  async execute(id: string, updates: Partial<User>) {
    const user = await User.findOneBy({ id });

    if (!user) throw new Error('User not found');

    Object.assign(user, updates);

    return await user.save();
  }
}
