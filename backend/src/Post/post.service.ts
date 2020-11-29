import { Injectable } from '@nestjs/common';
import { IPostService } from './interfaces/IPostService';

@Injectable()
export class PostService implements IPostService {
  findAll(): string {
    return 'Travis CI testing';
  }
}
