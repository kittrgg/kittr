import colors from '@Colors';

/** A bottom of a box with an arrow pointing upwards out of it. Use stroke for color. Defaults to white. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Line(props: any) {
  const {
    width = '100%',
    stroke = colors.white,
    onClick,
    dataCy,
    ...rest
  } = props;

  return (
    <svg
      data-cy={dataCy}
      fill="none"
      onClick={onClick}
      viewBox="0 0 516 5"
      width={width || '100%'}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M2.21289 2.58789H513.639"
        stroke={stroke}
        strokeLinecap="round"
        strokeWidth="4"
      />
    </svg>
  );
}
