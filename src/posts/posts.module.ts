import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostsController } from '@sapphire/posts/posts.controller';
import { Post } from '@sapphire/posts/post.entity';
import { PostsService } from '@sapphire/posts/posts.service';

@Module({
	imports: [TypeOrmModule.forFeature([Post])],
	controllers: [PostsController],
	providers: [PostsService],
})
export class PostsModule {}
