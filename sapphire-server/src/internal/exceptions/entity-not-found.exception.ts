import { NotFoundException } from '@nestjs/common';

export class PostNotFoundException extends NotFoundException {
	constructor(id: number) {
		super(`Post with ID ${id} not found.`);
	}
}

export class UserNotFoundException extends NotFoundException {
	constructor(id: string) {
		super(`User with ID ${id} not found.`);
	}
}
