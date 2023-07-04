import * as Icons from '@kittr/ui/icons';
import {
  Avatar,
  Badge,
  BlockQuote,
  GameCard,
  H1,
  H2,
  H3,
  H4,
  H5,
  P,
  PlayerCard,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@kittr/ui/new';

export const components = {
  avatar: {
    name: 'Avatar',
    components: [
      <Avatar
        imageSrc="https://github.com/shadcn.png"
        key="avatar"
        username="@shadcn"
      />,
    ],
  },
  badge: {
    components: [<Badge key="1">ayayay</Badge>],
    name: 'Badge',
  },
  icons: {
    name: 'Icons',
    components: Object.entries(Icons).map(([name, Icon]) => {
      return (
        <div className="flex flex-col justify-center gap-3" key={name}>
          <Icon className="mx-auto" />
          <H2 className="text-lg text-center">
            {'<'}
            {name}
            {' />'}
          </H2>
        </div>
      );
    }),
  },
  select: {
    name: 'Select',
    components: [
      <Select key="select">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Veggies</SelectLabel>
            <SelectItem value="celery">Celery</SelectItem>
            <SelectItem value="lettuce">Lettuce</SelectItem>
            <SelectItem value="potato">Potato</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>,
    ],
  },
  gameCard: {
    name: 'GameCard',
    components: [
      <GameCard
        developer="Activision"
        genres={['Battle Royale', 'FPS']}
        imageProps={{ src: 'https://placehold.co/160x256' }}
        key="gameCard"
        platforms={['PC', 'PS4', 'XBOX']}
        title="Warzone"
      />,
    ],
  },
  playerCard: {
    name: 'PlayerCard',
    components: [
      <PlayerCard
        imageSrc="https://pbs.twimg.com/profile_images/1640821224178589696/EPAD62bS_400x400.jpg"
        isLive
        key="JoeWo"
        name="JoeWo"
      />,
    ],
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
      <BlockQuote key="blockquote1">
        BlockQuote. Proin euismod nisl porttitor dui tristique condimentum. Cras
        commodo sem eget iaculis lobortis. Suspendisse congue tincidunt ligula,
        vel tristique diam dignissim non. Suspendisse elementum dolor a
        dignissim dapibus. Ut ornare eros sit amet vehicula tincidunt. Vivamus
        non diam sed ipsum euismod viverra quis eget lectus. In hac habitasse
        platea dictumst. Donec sodales, leo euismod mollis fringilla, ante dui
        rutrum sem, sit amet luctus enim justo non velit. Vestibulum varius arcu
        eu felis condimentum dignissim. Quisque sit amet urna mauris.
      </BlockQuote>,
      <BlockQuote key="blockquote2">
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
} as const;

export const componentEntries = Object.entries(components).sort((a, b) => {
  const [keyA] = a;
  const [keyB] = b;

  if (keyA < keyB) return -1;
  if (keyA > keyB) return 1;
  return 0;
});
