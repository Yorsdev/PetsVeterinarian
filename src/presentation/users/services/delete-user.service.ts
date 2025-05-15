import { User } from '../../../data';

export class DeleterUserService {
  async execute(id: string) {
    const user = await User.findOneBy({ id });

    if (!user) throw new Error('User not found');

    await user.remove();
  }
}
