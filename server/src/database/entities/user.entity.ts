import argon2 from 'argon2';
import {
	BaseEntity,
	BeforeInsert,
	BeforeUpdate,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { Log } from '../../logger';

@Entity({ name: 'users' })
export class User extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ unique: true })
	username: string;

	@Column({ select: false })
	password: string;

	@CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
	updatedAt: Date;

	@BeforeInsert()
	@BeforeUpdate()
	async hashPassword(): Promise<void> {
		try {
			this.password = await argon2.hash(this.password);
		} catch (err) {
			Log.error(err);
			throw new Error(`Failed to hash password for user: ${this.username}`);
		}
	}
}
