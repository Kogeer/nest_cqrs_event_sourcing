import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PostEntity } from './Entities/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [PostController],
  providers: [
    {
      provide: 'PostServiceInterface',
      useClass: PostService,
    },
  ],
  imports: [TypeOrmModule.forFeature([PostEntity])],
})
export class PostModule {}
