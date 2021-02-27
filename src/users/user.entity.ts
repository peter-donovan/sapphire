import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { Post } from '@sapphire/posts/post.entity';

@Entity({ name: 'users' })
export class User {
	@PrimaryGeneratedColumn('uuid')
	readonly id: string;

	@Column({ unique: true })
	username: string;

	@Column()
	password: string;

	// Timestamps
	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date;

	// References
	@OneToMany(() => Post, (posts) => posts.user, { cascade: true, eager: true })
	posts: Post[];
}
