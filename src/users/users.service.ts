import { CreateUserDto } from './users.dto';
import { Injectable } from '@nestjs/common';
// import { UserRepository } from './users.repository';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  // constructor(private readonly userRepository: UserRepository) {}

  private readonly users: User[] = [
    {
      id: 1,
      name: 'Bob',
      username: 'bobby',
      password: 'XXXXXX',
    },
    {
      id: 2,
      name: 'Alice',
      username: 'alice',
      password: 'XXXXXX',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  // async createUser(createUserDto: CreateUserDto): Promise<User> {
  //   const user = await this.userRepository.createUser(createUserDto);
  //   return user;
  // }
}
