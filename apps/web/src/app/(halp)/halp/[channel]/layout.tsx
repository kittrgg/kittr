export default function Layout(props: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {props.children}
        {props.team}
        {props.analytics}
      </body>
    </html>
  );
}
