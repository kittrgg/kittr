import { P, typographyVariants } from '../../Typography';
import { cn } from '../../utils';

export function SidebarHeader({ children }: { children: React.ReactNode }) {
  return (
    <P className={cn(typographyVariants({ presets: 'h3' }), 'py-2')}>
      {children}
    </P>
  );
}
