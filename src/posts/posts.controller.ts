import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
	constructor(private readonly postsService: PostsService) {}

	@Post()
	async createPost(@Body() createPostDto: CreatePostDto) {
		return this.postsService.createPost(createPostDto);
	}

	@Get()
	getAllPosts() {
		return this.postsService.findAllPosts();
	}

	@Get(':id')
	getPostById(@Param('id') id: string) {
		return this.postsService.findPostById(+id);
	}

	@Put(':id')
	async updatePost(@Param('id') id: string, @Body() post: UpdatePostDto) {
		return this.postsService.updatePostById(+id, post);
	}

	@Delete(':id')
	async deletePost(@Param('id') id: string) {
		this.postsService.deletePostById(+id);
	}
}
