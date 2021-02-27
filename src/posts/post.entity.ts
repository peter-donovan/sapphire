import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { JoinColumn } from 'typeorm';

import { User } from '@sapphire/users/user.entity';

@Entity({ name: 'posts' })
export class Post {
	@PrimaryGeneratedColumn()
	readonly id: number;

	@Column()
	title: string;

	@Column()
	content: string;

	// Timestamps
	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date;

	// References
	@ManyToOne(() => User, (user) => user.posts)
	@JoinColumn({ name: 'user_id' })
	user: User;
}
