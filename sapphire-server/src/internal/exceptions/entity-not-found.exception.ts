import { Logger, NotFoundException } from '@nestjs/common';

export class PostNotFoundException extends NotFoundException {
	constructor() {
		super(`No Post could be found from your request.`);
	}
}

export class UserNotFoundException extends NotFoundException {
	constructor() {
		super(`No User could be found from your request.`);
	}
}
