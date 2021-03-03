import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { AuthRequest, SafeUser } from 'internal/types';

export const CurrentUser = createParamDecorator(
	(data: unknown, ctx: ExecutionContext): SafeUser => {
		const request: AuthRequest = ctx.switchToHttp().getRequest<AuthRequest>();
		return request.user;
	}
);
