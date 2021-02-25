import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'posts' })
export class Post extends BaseEntity {
	@PrimaryGeneratedColumn()
	readonly id: number;

	@Column()
	title: string;

	@Column()
	content: string;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date;
}
