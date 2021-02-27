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
	@CreateDateColumn({ name: 'created_at', select: false })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at', select: false })
	updatedAt: Date;

	// References
	@OneToMany(() => Post, (posts) => posts.user, {
		cascade: true,
		eager: true,
		nullable: true,
	})
	posts?: Post[];
}
