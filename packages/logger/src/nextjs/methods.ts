/* eslint-disable no-console */
import { captureException, captureMessage } from '@sentry/nextjs';

/** Send exception to the error logger from Nextjs. */
export const logError = (message: Error | string, withConsole?: boolean) => {
  captureException(message);
  if (withConsole) {
    console.error(message);
  }
};

/** Send warning to the error logger from Nextjs. */
export const logWarning = (warning: string, withConsole?: boolean) => {
  captureMessage(warning, 'warning');
  if (withConsole) {
    console.warn(warning);
  }
};

/** Send an info log to the error logger from Nextjs. */
export const logInfo = (info: string, withConsole?: boolean) => {
  captureMessage(info, 'info');
  if (withConsole) {
    console.info(info);
  }
};

/** Send a debug log to the error logger from Nextjs. */
export const logDebug = (debugMessage: string, withConsole?: boolean) => {
  captureMessage(debugMessage, 'debug');
  if (withConsole) {
    console.info(debugMessage);
  }
};

/** Log a message to the console. This method will not send an error report. */
export const consoleLog = (message: string) => {
  console.log(message);
};
