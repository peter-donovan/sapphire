import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreatePostDto, UpdatePostDto } from 'posts/dto';
import { Post } from 'posts/post.entity';
import { IPost } from 'posts/post.interface';

@Injectable()
export class PostsService {
	constructor(@InjectRepository(Post) private readonly postsRepository: Repository<Post>) {}

	private lastPostId: number = 0;
	private posts: IPost[] = [];

	createPost(post: CreatePostDto): IPost {
		const newPost = {
			id: ++this.lastPostId,
			...post,
		};
		this.posts.push(newPost);
		return newPost;
	}

	findAllPosts(): IPost[] {
		return this.posts;
	}

	findPostById(id: number): IPost {
		const post = this.posts.find((p) => p.id === id);
		if (!post) {
			throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
		}

		return post;
	}

	updatePostById(id: number, post: UpdatePostDto): IPost {
		const index: number = this.posts.findIndex((p) => p.id === id);
		if (index > -1) {
			this.posts[index] = post;
			return post;
		}

		throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
	}

	deletePostById(id: number): void {
		const index: number = this.posts.findIndex((p) => p.id === id);
		if (index > -1) {
			this.posts.splice(index, 1);
		} else {
			throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
		}
	}
}
