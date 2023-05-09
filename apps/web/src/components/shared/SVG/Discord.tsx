import colors from '@Colors';
import { useState } from 'react';

/** The Discord logo. Use fill for color. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Discord(props: any) {
  const [isHovered, setIsHovered] = useState(false);

  const {
    width = '100%',
    fill = colors.white,
    colorHover = colors.white,
    dataCy,
    ...rest
  } = props;

  return (
    <svg
      data-cy={dataCy}
      fill="none"
      viewBox="0 0 88 63"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M77.0545 8.69027C66.3285 0.719121 56.1238 0.940309 56.1238 0.940309L55.081 2.12155C67.7438 5.95938 73.6285 11.4951 73.6285 11.4951C55.9344 1.88584 35.1499 1.88449 17.9867 9.35485C15.2304 10.6094 13.5918 11.4951 13.5918 11.4951C13.5918 11.4951 19.7745 5.66424 33.1822 1.8264L32.4375 0.940309C32.4375 0.940309 22.2326 0.719121 11.5065 8.69027C11.5065 8.69027 0.780518 27.9544 0.780518 51.7207C0.780518 51.7207 7.03777 62.4227 23.4986 62.9397C23.4986 62.9397 26.2549 59.6189 28.4895 56.8133C19.0295 54.0085 15.4546 48.1047 15.4546 48.1047C16.5502 48.8638 18.3571 49.8499 18.5084 49.9495C31.0809 56.9268 48.9393 59.2123 64.9881 52.5328C67.5945 51.5734 70.5001 50.1707 73.5539 48.178C73.5539 48.178 69.8294 54.2307 60.0716 56.9613C62.3068 59.7658 64.9881 62.9394 64.9881 62.9394C81.4497 62.4227 87.7805 51.7203 87.7805 51.7203C87.7805 27.9544 77.0545 8.69027 77.0545 8.69027ZM30.3516 44.8568C26.1803 44.8568 22.7537 41.1665 22.7537 36.6638C22.7537 32.1614 26.1057 28.4711 30.3516 28.4711C34.5971 28.4711 38.0238 32.1614 37.9491 36.6638C37.9491 41.1665 34.5971 44.8568 30.3516 44.8568ZM57.5391 44.8568C53.3682 44.8568 49.9416 41.1665 49.9416 36.6638C49.9416 32.1614 53.2936 28.4711 57.5391 28.4711C61.785 28.4711 65.1371 32.1614 65.1371 36.6638C65.1371 41.1665 61.785 44.8568 57.5391 44.8568Z"
        fill={isHovered ? colorHover : fill}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ transition: '.1s' }}
      />
    </svg>
  );
}
