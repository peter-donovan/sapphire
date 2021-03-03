import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from 'auth/guards';
import { CreatePostDto, UpdatePostDto } from 'posts/dto';
import { PostsService } from 'posts/posts.service';

@Controller('posts')
export class PostsController {
	constructor(private readonly postsService: PostsService) {}

	@Post()
	@UseGuards(JwtAuthGuard)
	async createPost(@Body() createPostDto: CreatePostDto) {
		return this.postsService.createPost(createPostDto);
	}

	@Get()
	async getAllPosts() {
		return this.postsService.findAllPosts();
	}

	@Get(':id')
	async getPostById(@Param('id') id: string) {
		return this.postsService.findPostById(+id);
	}

	@Put(':id')
	async updatePost(@Param('id') id: string, @Body() post: UpdatePostDto) {
		return this.postsService.updatePostById(+id, post);
	}

	@Delete(':id')
	async deletePost(@Param('id') id: string) {
		return this.postsService.deletePostById(+id);
	}
}