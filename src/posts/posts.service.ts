import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from 'src/posts/dto';
import { Post } from './post.interface';

@Injectable()
export class PostsService {
	private lastPostId: number = 0;
	private posts: Post[] = [];

	createPost(post: CreatePostDto): Post {
		const newPost: Post = {
			id: ++this.lastPostId,
			...post,
		};
		this.posts.push(newPost);
		return newPost;
	}

	findAllPosts(): Post[] {
		return this.posts;
	}

	findPostById(id: number): Post {
		const post: Post = this.posts.find((p) => p.id === id);
		if (!post) {
			throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
		}

		return post;
	}

	updatePostById(id: number, post: UpdatePostDto): Post {
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
