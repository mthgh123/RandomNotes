import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from './user.model';

@Controller('/login')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async login(@Body() userCreateDto: UserCreateDto) {
    const user = await this.userService.createNewUser(userCreateDto);
    return user;
  }
}
