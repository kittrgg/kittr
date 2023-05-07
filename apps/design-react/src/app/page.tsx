import { PlayerCard, Typography } from "@kittr/ui/new";
import "@kittr/ui/styles.css";

export default function Home() {
  return (
    <main className="min-h-screen flex-col justify-between p-24">
      {/* <HelloWorld /> */}

      <PlayerCard
        name="JoeWo"
        isLive={true}
        imageProps={{ src: "https://placehold.co/128x128" }}
      />
      <PlayerCard
        name="JoeWo"
        isLive={true}
        imageProps={{ src: "https://placehold.co/128x128" }}
      />

      <Typography.H1>H1. Heading</Typography.H1>
      <Typography.H2>H2. Heading</Typography.H2>
      <Typography.H3>H3. Heading</Typography.H3>
      <Typography.H4>H4. Heading</Typography.H4>
      <Typography.H5>H5. Heading</Typography.H5>
      <Typography.P>
        P. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod
        libero vitae sollicitudin varius. Donec tristique nunc velit, et
        tincidunt orci lacinia quis. Aenean sed porta nibh, a scelerisque massa.
        Proin vitae tempor risus. Curabitur pharetra, urna id commodo
        ullamcorper, velit lorem efficitur nisl, ac pharetra tellus elit eu sem.
        Vestibulum quis libero vel dui iaculis venenatis. Morbi tincidunt lacus
        vel diam venenatis, in sagittis massa elementum.
      </Typography.P>
      <Typography.BlockQuote>
        BlockQuote. Proin euismod nisl porttitor dui tristique condimentum. Cras
        commodo sem eget iaculis lobortis. Suspendisse congue tincidunt ligula,
        vel tristique diam dignissim non. Suspendisse elementum dolor a
        dignissim dapibus. Ut ornare eros sit amet vehicula tincidunt. Vivamus
        non diam sed ipsum euismod viverra quis eget lectus. In hac habitasse
        platea dictumst. Donec sodales, leo euismod mollis fringilla, ante dui
        rutrum sem, sit amet luctus enim justo non velit. Vestibulum varius arcu
        eu felis condimentum dignissim. Quisque sit amet urna mauris.
      </Typography.BlockQuote>
    </main>
  );
}
