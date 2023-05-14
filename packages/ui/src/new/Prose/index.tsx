import { cn } from '../utils';

export const Prose = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={cn('prose lg:prose-xl', className)}>{children}</div>;
};
