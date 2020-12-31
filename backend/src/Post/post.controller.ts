import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import PostServiceInterface from './interfaces/post-service.interface';
import { CreatePostDto } from './Entities/create-post.dto';

@Controller('posts')
export class PostController {
  constructor(
    @Inject('PostServiceInterface') private postService: PostServiceInterface,
  ) {}

  @Get()
  async findAll() {
    return this.postService.findAll();
  }

  @Post()
  async createPost(@Body() createPostDto: CreatePostDto) {
    return this.postService.createPost(createPostDto);
  }
}
