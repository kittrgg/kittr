import colors from '@Colors';

/** An X to use for ...x-ing things. Use fill for color. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function X(props: any) {
  const { width = '100%', fill = colors.white, dataCy, ...rest } = props;

  return (
    <svg
      data-cy={dataCy}
      fill="none"
      height={11}
      viewBox="0 0 13 11"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M10.432.59L6.519 4.195 2.607.59a1.175 1.175 0 00-1.565 0 .964.964 0 000 1.442l3.913 3.605-3.913 3.605a.964.964 0 000 1.442 1.175 1.175 0 001.565 0L6.52 7.079l3.913 3.605a1.175 1.175 0 001.565 0 .964.964 0 000-1.442L8.084 5.637l3.913-3.605a.964.964 0 000-1.442 1.175 1.175 0 00-1.565 0z"
        fill={fill}
      />
    </svg>
  );
}
