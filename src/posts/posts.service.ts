import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { CreatePostDto, UpdatePostDto } from 'posts/dto';
import { Post } from 'posts/post.entity';

@Injectable()
export class PostsService {
	constructor(@InjectRepository(Post) private readonly postsRepository: Repository<Post>) {}

	async createPost(post: CreatePostDto): Promise<Post> {
		const newPost: Post = this.postsRepository.create(post);
		await this.postsRepository.save(newPost);
		return newPost;
	}

	async findAllPosts(): Promise<Post[]> {
		const posts: Post[] = await this.postsRepository.find();
		if (!posts.length) {
			throw new HttpException('Posts not found.', HttpStatus.NOT_FOUND);
		}
		return this.postsRepository.find();
	}

	async findPostById(id: number): Promise<Post> {
		const post: Post | undefined = await this.postsRepository.findOne(id);
		if (!post) {
			throw new HttpException('Post not found.', HttpStatus.NOT_FOUND);
		}
		return post;
	}

	async updatePostById(id: number, post: UpdatePostDto): Promise<Post> {
		await this.postsRepository.update(id, post);
		const updatedPost: Post | undefined = await this.postsRepository.findOne(id);
		if (!updatedPost) {
			throw new HttpException('Post not found.', HttpStatus.NOT_FOUND);
		}
		return updatedPost;
	}

	async deletePostById(id: number) {
		const result: DeleteResult = await this.postsRepository.delete(id);
		if (!result.affected) {
			throw new HttpException('Post not found.', HttpStatus.NOT_FOUND);
		}
	}
}
