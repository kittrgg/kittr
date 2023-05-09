import colors from '@Colors';

/** A question mark in a circle. Use stroke for color. Defaults to colors.lightest. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function QuestionMark(props: any) {
  const { width = '100%', stroke = colors.lightest, dataCy, ...rest } = props;

  return (
    <svg
      data-cy={dataCy}
      fill="none"
      height={22}
      viewBox="0 0 22 22"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M11 20.167a9.167 9.167 0 100-18.333 9.167 9.167 0 000 18.333z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M8.332 8.25a2.75 2.75 0 015.344.917c0 1.833-2.75 2.75-2.75 2.75M11 15.584h.01"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
}
