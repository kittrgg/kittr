import { get } from "@kittr/flags";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: "noindex",
};

const DeveloperTestingSandbox = async () => {
  const greeting = await get("greeting");

  return <div>{JSON.stringify(greeting, null, 2)}</div>;
};

export default DeveloperTestingSandbox;
