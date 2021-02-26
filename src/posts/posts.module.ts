import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostsController } from 'posts/posts.controller';
import { Post } from 'posts/post.entity';
import { PostsService } from 'posts/posts.service';

@Module({
	imports: [TypeOrmModule.forFeature([Post])],
	controllers: [PostsController],
	providers: [PostsService],
})
export class PostsModule {}
