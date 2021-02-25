import { Logger, LoggerWithoutCallSite } from 'tslog';

const loggerName: string = 'Logger';
const verboseLoggerName: string = 'Logger [VERBOSE]';

export function createLogger(verbose: boolean): Logger | LoggerWithoutCallSite {
	if (verbose) {
		return new Logger({
			name: verboseLoggerName,
			printLogMessageInNewLine: true,
		});
	}

	return new LoggerWithoutCallSite({ name: loggerName });
}

export const Log = createLogger(true);
