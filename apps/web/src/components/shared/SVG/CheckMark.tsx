import colors from '@Colors';

/** A check mark. Use stroke for color. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CheckMark(props: any) {
  const { width = '100%', stroke = colors.white, dataCy, ...rest } = props;

  return (
    <svg
      data-cy={dataCy}
      fill="none"
      height={13}
      viewBox="0 0 19 13"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M17.48 1l-11 11-5-5"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
}
