import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Post } from 'posts/post.entity';
import { PostsController } from 'posts/posts.controller';
import { PostsService } from 'posts/posts.service';
import { UsersModule } from 'users/users.module';

@Module({
	imports: [TypeOrmModule.forFeature([Post]), UsersModule],
	controllers: [PostsController],
	providers: [PostsService],
})
export class PostsModule {}
