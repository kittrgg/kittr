import { typographyVariants } from '@kittr/ui/new';
import { NotFoundLinkButton } from './notFoundLinkButton';

export default function NotFound() {
  return (
    <>
      <p className={typographyVariants({ presets: 'h1' })}>OOPS...</p>
      <p className={typographyVariants({ presets: 'h2' })}>
        Sorry, but we aren't seeing this creator on kittr.
      </p>
      <NotFoundLinkButton />
    </>
  );
}
