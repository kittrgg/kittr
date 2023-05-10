import { Badge, H1, H2, H3, H4, H5, P, BlockQuote } from '@kittr/ui/new';

type ComponentsMap = Record<
  string,
  {
    components: React.ReactNode[];
    name: string;
  }
>;

export const components: ComponentsMap = {
  badge: {
    components: [<Badge key="1">ayayay</Badge>],
    name: 'Badge',
  },
  typography: {
    components: [
      <H1 key="1">H1. Heading</H1>,
      <H2 key="2">H2. Heading</H2>,
      <H3 key="3">H3. Heading</H3>,
      <H4 key="4">H4. Heading</H4>,
      <H5 key="5">H5. Heading</H5>,
      <P key="p">
        P. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod
        libero vitae sollicitudin varius. Donec tristique nunc velit, et
        tincidunt orci lacinia quis. Aenean sed porta nibh, a scelerisque massa.
        Proin vitae tempor risus. Curabitur pharetra, urna id commodo
        ullamcorper, velit lorem efficitur nisl, ac pharetra tellus elit eu sem.
        Vestibulum quis libero vel dui iaculis venenatis. Morbi tincidunt lacus
        vel diam venenatis, in sagittis massa elementum.
      </P>,
      <BlockQuote key="blockquote">
        BlockQuote. Proin euismod nisl porttitor dui tristique condimentum. Cras
        commodo sem eget iaculis lobortis. Suspendisse congue tincidunt ligula,
        vel tristique diam dignissim non. Suspendisse elementum dolor a
        dignissim dapibus. Ut ornare eros sit amet vehicula tincidunt. Vivamus
        non diam sed ipsum euismod viverra quis eget lectus. In hac habitasse
        platea dictumst. Donec sodales, leo euismod mollis fringilla, ante dui
        rutrum sem, sit amet luctus enim justo non velit. Vestibulum varius arcu
        eu felis condimentum dignissim. Quisque sit amet urna mauris.
      </BlockQuote>,
    ],
    name: 'Typography',
  },
};

export const componentEntries = Object.entries(components).sort((a, b) => {
  const [keyA] = a;
  const [keyB] = b;

  if (keyA < keyB) return -1;
  if (keyA > keyB) return 1;
  return 0;
});
