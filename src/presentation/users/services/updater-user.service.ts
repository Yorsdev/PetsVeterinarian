import { Repository } from 'typeorm';
import { User } from '../../../data';

export class UpdaterUserService {
  constructor(private readonly userRepository: Repository<User>) {}

  async execute(id: string, updates: Partial<User>) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new Error('User not found');

    Object.assign(user, updates);
    return this.userRepository.save(user);
  }
}
