import { Text } from "../Text";
import { SubSection } from ".";

export default {
  title: "SubSection",
  component: SubSection,
};

export const Default = () => (
  <SubSection title="OUR STORY">
    <Text>
      One day, our founder, Anthony, was watching some Warzone channels on
      Twitch. He used an !amax command to try to find out about a channeler's
      CR-56 AMAX setup (classic 2020). In most of the channels he watched,
      though, when viewers asked for a channeler’s kits in chat, they were given
      the link to...an ugly Google Sheet that was hard to read and interact
      with. Let it be known: Anthony is a web developer. As he struggled to
      learn about this AMAX, all he could think to himself was "Is there not a
      better way to do this?" The idea for kittr was born.
    </Text>
    <Text sx={{ marginTop: "1rem" }}>
      Anthony quickly enlisted the help of his sister, a then-budding web
      designer. She was just learning the craft at the time - but Anthony
      promoted her to the big leagues right then and there. As it turns out
      Ashley is a complete all-star designer so she made all of the beautiful
      design for the website that you see.
    </Text>
    <Text sx={{ marginTop: "1rem" }}>
      Today, kittr is the{" "}
      <Text weight={500} sx={{ display: "inline-block" }}>
        kit sharing solution
      </Text>{" "}
      that video game channelers have been waiting for. We hope you like it as
      much as we do.
    </Text>
  </SubSection>
);

export const Caption = () => (
  <SubSection
    title="TOURNEY WRAP: $100K WARZONE ROKKR ROYALE TOURNAMENT"
    action="Aug 18, 2021"
  >
    <Text>
      Welcome one and all to this ROKKR sponsored tournament, featuring fun,
      competition, and a big ol' purse of $100,000! This tournament was a bit
      unconventional as it wasn't your standard slay-fest...
    </Text>
  </SubSection>
);
