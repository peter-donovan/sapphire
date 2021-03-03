import { Request } from 'express';
import { User } from 'users/user.entity';

// SafeUser is an instance of a User entity with the password field omitted.
export type SafeUser = Omit<User, 'password'>;

// TokenPayload is an object that describes the shape of a JWT payload sent as a cookie.
export interface TokenPayload {
	id: string;
	sub: string;
}

// AuthRequest is an Express Request object with an added user property.
export interface AuthRequest extends Request {
	user: SafeUser;
}
