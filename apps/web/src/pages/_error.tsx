// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { flush, captureException } from '@sentry/nextjs';
import NextErrorComponent from 'next/error';

function MyError({ statusCode, hasGetInitialPropsRun, err }) {
  if (!hasGetInitialPropsRun && err) {
    // GetInitialProps is not called in case of
    // https://github.com/vercel/next.js/issues/8592. As a workaround, we pass
    // Err via _app.js so it can be captured
    captureException(err, { tags: { isKittr: true } });
    // Flushing is not required in this case as it only happens on the client
  }

  return <NextErrorComponent statusCode={statusCode} />;
}

MyError.getInitialProps = async (context) => {
  const errorInitialProps = await NextErrorComponent.getInitialProps(context);

  const { res, err } = context;

  // Workaround for https://github.com/vercel/next.js/issues/8592, mark when
  // GetInitialProps has run
  errorInitialProps.hasGetInitialPropsRun = true;

  // Returning early because we don't want to log 404 errors to Logger.
  if (res?.statusCode === 404) {
    return errorInitialProps;
  }

  // Running on the server, the response object (`res`) is available.
  //
  // Next.js will pass an err on the server if a page's data fetching methods
  // Threw or returned a Promise that rejected
  //
  // Running on the client (browser), Next.js will provide an err if:
  //
  //  - a page's `getInitialProps` threw or returned a Promise that rejected
  //  - an exception was thrown somewhere in the React lifecycle (render,
  //    ComponentDidMount, etc) that was caught by Next.js's React Error
  //    Boundary. Read more about what types of exceptions are caught by Error
  //    Boundaries: https://reactjs.org/docs/error-boundaries.html

  if (err) {
    captureException(err, { tags: { isKittr: true } });

    // Flushing before returning is necessary if deploying to Vercel, see
    // https://vercel.com/docs/platform/limits#streaming-responses
    await flush(2000);

    return errorInitialProps;
  }

  // If this point is reached, getInitialProps was called without any
  // Information about what the error might be. This is unexpected and may
  // Indicate a bug introduced in Next.js, so record it in Logger

  captureException(error, { tags: { isKittr: true } });
  await flush(2000);

  return errorInitialProps;
};

export default MyError;
