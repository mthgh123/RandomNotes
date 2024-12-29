import { Controller, Get, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/jun')
  junhello(@Res() response: Response) {
    const mesg: string = this.userService.method();
    response.status(200).json({
      message: mesg,
    });
  }
}
