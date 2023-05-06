import { HelloWorld } from "@kittr/ui/new";
import "@kittr/ui/styles.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="bg-red-500">test</p>
      <HelloWorld />
    </main>
  );
}
