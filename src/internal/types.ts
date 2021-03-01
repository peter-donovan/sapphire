import { Request } from 'express';
import { User } from '@sapphire/users/user.entity';

export type SafeUser = Omit<User, 'password'>;

export interface AuthRequest extends Request {
	user: SafeUser;
}
