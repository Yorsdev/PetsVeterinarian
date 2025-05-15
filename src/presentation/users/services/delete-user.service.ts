import { Repository } from 'typeorm';
import { User } from '../../../data';

export class DeleterUserService {
  constructor(private readonly userRepository: Repository<User>) {}

  async execute(id: string) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new Error('User not found');

    await this.userRepository.remove(user);
  }
}
