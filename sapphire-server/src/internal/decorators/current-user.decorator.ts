import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { AuthRequest } from 'internal/types';
import { User } from 'users/user.entity';

export const CurrentUser = createParamDecorator(
	(data: unknown, ctx: ExecutionContext): User => {
		const request: AuthRequest = ctx.switchToHttp().getRequest<AuthRequest>();
		return request.user;
	}
);
