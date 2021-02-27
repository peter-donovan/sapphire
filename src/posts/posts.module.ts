import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Post } from '@sapphire/posts/post.entity';
import { PostsController } from '@sapphire/posts/posts.controller';
import { PostsService } from '@sapphire/posts/posts.service';

@Module({
	imports: [TypeOrmModule.forFeature([Post])],
	controllers: [PostsController],
	providers: [PostsService],
})
export class PostsModule {}
