import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  method(): string {
    return '111';
  }
}
