import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(
    username: string,
    gender: string,
    email: string,
    password: string,
  ): Promise<User> {
    const user = new User();
    user.username = username;
    user.gender = gender;
    user.email = email;
    user.password = password;
    return await user.save();
  }

  async findUserByEmail(email: string): Promise<User> {
    return await this.findOne({ email: email });
  }

  async findUserByUsername(username: string): Promise<User> {
    return await this.findOne({ username: username });
  }
}
