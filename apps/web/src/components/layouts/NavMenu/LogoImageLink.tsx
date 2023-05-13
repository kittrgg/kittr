import { Routes } from '@Utils/lookups/routes';
import Link from 'next/link';

/** A logo image with a link wrapper for headers */
function LogoImage() {
  return (
    <Link href={Routes.ROOT} passHref>
      <img
        alt="Kittr Logo"
        height={150}
        src="/media/beta-logo.svg"
        width={150}
      />
    </Link>
  );
}

export default LogoImage;
