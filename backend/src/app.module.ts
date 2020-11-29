import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PostModule } from './Post/post.module';

@Module({
  imports: [PostModule],
  providers: [AppService],
})
export class AppModule {}
