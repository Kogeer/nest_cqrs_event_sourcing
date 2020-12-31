import { Injectable } from '@nestjs/common';
import PostServiceInterface from './interfaces/post-service.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './Entities/post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './Entities/create-post.dto';

@Injectable()
export class PostService implements PostServiceInterface {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
  ) {}

  findAll(): Promise<PostEntity[]> {
    return this.postRepository.find();
  }

  createPost(createPostDto: CreatePostDto) {
    return this.postRepository.save(createPostDto);
  }
}
