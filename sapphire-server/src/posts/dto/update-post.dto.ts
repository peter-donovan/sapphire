import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdatePostDto {
	@IsNumber()
	readonly id: number;

	@IsString()
	@IsNotEmpty()
	title: string;

	@IsString()
	@IsNotEmpty()
	content: string;
}
