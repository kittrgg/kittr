/** This type is taken from the Next.js Link type so we can use it in our UI lib. */
export type NextLinkType = React.ForwardRefExoticComponent<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/sort-type-constituents
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, any> &
    React.RefAttributes<HTMLAnchorElement> & {
      children?: React.ReactNode;
    } & {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      href: any;
      className?: string;
      prefetch?: boolean;
    }
>;
