export const interBold = fetch(
  new URL(`../../../../../public/fonts/Inter-Bold.ttf`, import.meta.url),
).then((res) => res.arrayBuffer());

export const interRegular = fetch(
  new URL(`../../../../../public/fonts/Inter-Regular.ttf`, import.meta.url),
).then((res) => res.arrayBuffer());
