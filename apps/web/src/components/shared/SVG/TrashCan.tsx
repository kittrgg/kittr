import colors from '@Colors';

/** An object visualization of Anthony Shew. Use stroke for color. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function TrashCan(props: any) {
  const { width = '100%', stroke = colors.white, dataCy, ...rest } = props;

  return (
    <svg
      data-cy={dataCy}
      fill="none"
      height={22}
      viewBox="0 0 20 22"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M1 5h18M6 5V3a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5h14zM8 10v6M12 10v6"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
}
