'use client';

export function AppShellLinkItem({
  component,
}: {
  component: React.ReactElement<{ className: string }>;
}) {
  component.props.className = 'text-white transition hover:text-zinc-300';
  return component;
}
