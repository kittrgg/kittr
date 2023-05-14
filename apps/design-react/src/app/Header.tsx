import { P, typographyVariants } from '@kittr/ui/new';

export function SidebarHeader({ children }: { children: React.ReactNode }) {
  return <P className={typographyVariants({ presets: 'h4' })}>{children}</P>;
}
