import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserCreateDto } from './user.model';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createNewUser(userCreateDto: UserCreateDto) {
    const exisUser = this.prisma.user.findUnique({
      where: {
        email: userCreateDto.email,
      },
    });

    if (exisUser) {
      return 'exist';
    } else {
      const newUser = this.prisma.user.create({
        data: {
          email: userCreateDto.email,
          password: userCreateDto.password,
        },
      });
      return newUser;
    }
  }
}
