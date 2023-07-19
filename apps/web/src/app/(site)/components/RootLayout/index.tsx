import { AppShellWrapper } from '@/app/(site)/components/RootLayout/AppShellWrapper';
import { inter } from '@/app/fonts';

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${inter.variable}`} lang="en">
      <body className="flex flex-row justify-center flex-grow w-full m-auto font-sans antialiased bg-zinc-800 ">
        <AppShellWrapper>{children}</AppShellWrapper>
      </body>
    </html>
  );
}
