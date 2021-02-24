import { Logger, LoggerWithoutCallSite } from 'tslog';

const loggerName: string = 'S-Logger';
const verboseLoggerName: string = 'S-Logger (verbose)';

export function createLogger(verbose: boolean): Logger | LoggerWithoutCallSite {
	if (verbose) {
		return new Logger({ name: verboseLoggerName });
	}

	return new LoggerWithoutCallSite({ name: loggerName });
}

export const Log = createLogger(true);
