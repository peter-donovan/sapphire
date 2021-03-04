import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { PostNotFoundException } from 'internal/exceptions';
import { CreatePostDto, UpdatePostDto } from 'posts/dto';
import { Post } from 'posts/post.entity';
import { SafeUser } from 'internal/types';

@Injectable()
export class PostsService {
	constructor(@InjectRepository(Post) private readonly postsRepository: Repository<Post>) {}

	async createPost(user: SafeUser, newPostDto: CreatePostDto): Promise<Post> {
		const newPost: Post = this.postsRepository.create({
			...newPostDto,
			user,
		});
		await this.postsRepository.save(newPost);
		return newPost;
	}

	async findAllPosts(): Promise<Post[]> {
		const posts: Post[] = await this.postsRepository.find();
		if (!posts.length) {
			throw new PostNotFoundException();
		}
		return this.postsRepository.find();
	}

	async findPostById(id: number): Promise<Post> {
		const post: Post | undefined = await this.postsRepository.findOne(id);
		if (!post) {
			throw new PostNotFoundException();
		}
		return post;
	}

	async updatePostById(id: number, post: UpdatePostDto): Promise<Post> {
		await this.postsRepository.update(id, post);
		const updatedPost: Post | undefined = await this.postsRepository.findOne(id);
		if (!updatedPost) {
			throw new PostNotFoundException();
		}
		return updatedPost;
	}

	async deletePostById(id: number) {
		const result: DeleteResult = await this.postsRepository.delete(id);
		if (!result.affected) {
			throw new PostNotFoundException();
		}
	}
}
