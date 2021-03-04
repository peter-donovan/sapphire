import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdatePostDto {
	@IsNumber()
	readonly id: number;

	@IsString()
	@IsNotEmpty()
	@IsOptional()
	title?: string;

	@IsString()
	@IsNotEmpty()
	@IsOptional()
	content?: string;
}
