import * as Sentry from '@sentry/nextjs';

/** Send exception to the error logger from Nextjs. */
export const logError = (message: string | Error, withConsole?: boolean) => {
  Sentry.captureException(message);
  if (withConsole) {
    console.error(message);
  }
};

/** Send warning to the error logger from Nextjs. */
export const logWarning = (warning: string, withConsole?: boolean) => {
  Sentry.captureMessage(warning, 'warning' as any);
  if (withConsole) {
    console.warn(warning);
  }
};

/** Send an info log to the error logger from Nextjs. */
export const logInfo = (info: string, withConsole?: boolean) => {
  Sentry.captureMessage(info, 'info' as any);
  if (withConsole) {
    console.info(info);
  }
};

/** Send a debug log to the error logger from Nextjs. */
export const logDebug = (debugMessage: string, withConsole?: boolean) => {
  Sentry.captureMessage(debugMessage, 'debug' as any);
  if (withConsole) {
    console.info(debugMessage);
  }
};

/** Log a message to the console. This method will not send an error report. */
export const consoleLog = (message: string) => {
  console.log(message);
};
