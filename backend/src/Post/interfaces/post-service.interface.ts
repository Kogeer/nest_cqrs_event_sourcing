import { PostEntity } from '../Entities/post.entity';
import { CreatePostDto } from '../Entities/create-post.dto';

export default interface PostServiceInterface {
  findAll(): Promise<PostEntity[]>;

  createPost(createPostDto: CreatePostDto);
}
