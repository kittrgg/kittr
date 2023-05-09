import colors from '@Colors';

/** Magnifying glass icon. Use fill for color. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Search(props: any) {
  const { width = '100%', fill = colors.light, dataCy, ...rest } = props;

  return (
    <svg
      data-cy={dataCy}
      fill="none"
      height={15}
      viewBox="0 0 15 15"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M14.18 12.441l-2.99-2.99c.619-.93.98-2.044.98-3.243A5.894 5.894 0 006.282.321 5.894 5.894 0 00.395 6.208a5.894 5.894 0 005.887 5.888 5.847 5.847 0 003.244-.98l2.989 2.99a1.177 1.177 0 101.665-1.665zM2.161 6.208a4.126 4.126 0 014.121-4.12 4.126 4.126 0 014.122 4.12 4.126 4.126 0 01-4.122 4.122 4.126 4.126 0 01-4.12-4.122z"
        fill={fill}
      />
    </svg>
  );
}
