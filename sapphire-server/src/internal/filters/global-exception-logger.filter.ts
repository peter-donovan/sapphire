import { ArgumentsHost, Catch, Logger } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class GlobalExceptionLogger extends BaseExceptionFilter {
	catch(exception: any, host: ArgumentsHost) {
		Logger.error(exception, undefined, 'GlobalExceptionLogger');
		super.catch(exception, host);
	}
}
