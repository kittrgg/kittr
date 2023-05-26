import colors from '@Colors';
import { SearchInput, SVG } from '@Components/shared';
import { useChannelProfileData } from '@Hooks/trpc/useChannelProfileData';
import { Routes } from '@Utils/lookups/routes';
import type {
  WarzoneKit,
  WarzoneKitBase,
  WarzoneTwoKit,
  WarzoneTwoKitBase,
} from '@kittr/prisma';
import type { ButtonProps } from '@kittr/ui';
import { Button, Text, Title } from '@kittr/ui';
import { Accordion, ScrollArea } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

interface SidebarButtonProps extends ButtonProps {
  kit:
    | (WarzoneKit & { base: WarzoneKitBase })
    | (WarzoneTwoKit & { base: WarzoneTwoKitBase });
  featured?: boolean;
  subButton?: boolean;
  useBaseName?: boolean;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  kit,
  featured,
  subButton,
  useBaseName,
  ...props
}) => {
  const {
    query: { k },
  } = useRouter();
  const kitNameQuery = k as string;
  const selected = matchDisplayQuery(
    kitNameQuery,
    kit,
    Boolean(kit.customTitle),
  );
  const defaultStyle = {
    backgroundColor: selected ? colors.dark20 : colors.light,
    margin: '0.5em 0',
    ':&hover': {
      backgroundColor: 'green',
    },
  };
  const subButtonStyle = {
    width: '90%',
    backgroundColor: selected ? colors.dark20 : colors.light,
    marginLeft: 'auto',
    marginTop: '0.25em',
  };

  return (
    <Button
      fullWidth
      rightIcon={
        featured ? <SVG.Star fill={colors.gold} stroke="none" /> : null
      }
      style={subButton ? subButtonStyle : defaultStyle}
      styles={{ label: { textAlign: 'left', width: '100%' } }}
      {...props}
    >
      {useBaseName
        ? kit.base.displayName
        : kit.customTitle
        ? kit.customTitle
        : subButton
        ? 'Default'
        : kit.base.displayName}
    </Button>
  );
};

const matchDisplayQuery = (
  kitNameQuery: string | undefined,
  kit:
    | (WarzoneKit & { base: WarzoneKitBase })
    | (WarzoneTwoKit & { base: WarzoneTwoKitBase }),
  customTitle?: boolean,
) => {
  if (customTitle) {
    return (
      kitNameQuery?.replace(' ', '-') ===
      (kit.base.displayName + kit.customTitle).replace(' ', '-')
    );
  }
  return (
    kitNameQuery?.replace(' ', '-') === kit.base.displayName.replace(' ', '-')
  );
};

const CATEGORIES = [
  'Assault Rifle',
  'Battle Rifle',
  'SMG',
  'Shotgun',
  'LMG',
  'Tactical Rifle',
  'Marksman Rifle',
  'Sniper Rifle',
  'Handgun',
];

function Sidebar() {
  const { width } = useViewportSize();
  const [filterQuery, setFilterQuery] = useState('');
  const isMobile = width <= 1050;
  const router = useRouter();
  const {
    query: { game, channel },
  } = router;
  const { data: channelData } = useChannelProfileData();
  const unfilteredKits = channelData?.warzoneKits ?? [];
  const unfilteredwz2Kits = channelData?.warzoneTwoKits ?? [];
  const allKits = game === 'wz2' ? unfilteredwz2Kits : unfilteredKits;
  const filteredByFavorite = allKits.filter((kit) => kit.featured);

  return (
    <>
      <div style={{ padding: '0 1em' }}>
        <SearchInput
          clearSearch={() => setFilterQuery('')}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFilterQuery(e.target.value)
          }
          value={filterQuery}
        />
      </div>
      <hr style={{ width: '88%', borderColor: colors.lightest }} />
      <ScrollArea
        style={{ height: isMobile ? '75vh' : '85vh', padding: '0 1em' }}
      >
        {/* If there are favorited kits and no filterQuery - display them at the top of the scroller */}
        {filteredByFavorite.length > 0 && !filterQuery && (
          <>
            <Title ml="0.75em" preset="h4">
              Favorites
            </Title>
            {filteredByFavorite.map((favKit) => (
              <SidebarButton
                featured
                key={favKit.id}
                kit={favKit}
                onClick={() => {
                  router.push(
                    Routes.CHANNEL.GAME.createPath(
                      channel as string,
                      game as string,
                      `?k=${favKit.base.displayName.replace(/ /g, '-')}`,
                    ),
                    undefined,
                    { shallow: true },
                  );
                }}
                useBaseName
              />
            ))}
          </>
        )}
        {CATEGORIES.map((category) => {
          return (
            <>
              <Title ml="0.75em" preset="h4" style={{ color: 'white' }}>
                {/*
								If there is a filter query - filter allkits to the search query and find index of category - else find index on unfiltered kits
								 *** If index is -1 that means there is no kit so it won't show category name ***
								 */}
                {(
                  filterQuery
                    ? allKits
                        .filter((kit) =>
                          kit.base.displayName
                            .toLowerCase()
                            .includes(filterQuery.toLowerCase()),
                        )
                        .findIndex(
                          (kit) => kit.base.category.displayName === category,
                        ) !== -1
                    : allKits.findIndex(
                        (kit) => kit.base.category.displayName === category,
                      ) !== -1
                )
                  ? category
                  : null}
              </Title>
              {/* Kits are filtered by categories and does not include featured kits. */}
              {allKits
                .filter((unsortedKit) =>
                  // If there is a filter query search - find kits that include query and similar categories   else - find kits that are in similar categories
                  filterQuery
                    ? unsortedKit.base.displayName
                        .toLowerCase()
                        .includes(filterQuery.toLowerCase()) &&
                      unsortedKit.base.category.displayName === category
                    : unsortedKit.base.category.displayName === category,
                )
                .map((kit) => {
                  // If the kit has a customTitle - display an accordion with the kits that have a customTitle and the base kit that has no customTitle
                  if (kit.customTitle) {
                    return (
                      <Accordion
                        chevron={
                          <Text>
                            (
                            {
                              allKits.filter(
                                (subKit) =>
                                  kit.base.displayName ===
                                  subKit.base.displayName,
                              ).length
                            }
                            )
                          </Text>
                        }
                        chevronPosition="right"
                        disableChevronRotation
                        styles={{
                          control: {
                            backgroundColor: colors.light,
                            padding: '0.5em',
                            borderRadius: '16px',
                            fontSize: '1.2em',
                            color: colors.white,
                            paddingLeft: '1.35em',
                            ':hover': {
                              background: colors.lighter,
                            },
                          },
                          label: { fontWeight: 600 },
                          content: { padding: 0 },
                          itemTitle: { fontWeight: 'bold' },
                          item: { border: 'transparent' },
                        }}
                      >
                        <Accordion.Item value={kit.base.displayName}>
                          {/* Finds similar kits by matching the filtered kit base displayname with the kit that has a customTitle */}
                          <Accordion.Control>
                            {kit.base.displayName}
                          </Accordion.Control>
                          {allKits
                            .filter(
                              (subKit) =>
                                kit.base.displayName ===
                                subKit.base.displayName,
                            )
                            .map((sub) => (
                              <Accordion.Panel key={sub.id}>
                                <SidebarButton
                                  featured={sub.featured}
                                  kit={sub}
                                  onClick={() => {
                                    router.push(
                                      Routes.CHANNEL.GAME.createPath(
                                        channel as string,
                                        game as string,
                                        `?k=${sub.base.displayName.replace(
                                          / /g,
                                          '-',
                                        )}
																				${sub.customTitle && sub.customTitle.replace(/ /g, '-')}`,
                                      ),
                                      undefined,
                                      { shallow: true },
                                    );
                                  }}
                                  subButton
                                />
                              </Accordion.Panel>
                            ))}
                        </Accordion.Item>
                      </Accordion>
                    );
                  }
                  // If there is only one kit with this displayName then show only the button
                  if (
                    allKits.filter(
                      (subKit) =>
                        kit.base.displayName === subKit.base.displayName,
                    ).length === 1
                  ) {
                    return (
                      <SidebarButton
                        featured={kit.featured}
                        key={kit.id}
                        kit={kit}
                        onClick={() => {
                          router.push(
                            Routes.CHANNEL.GAME.createPath(
                              channel as string,
                              game as string,
                              `?k=${kit.base.displayName.replace(/ /g, '-')}
										${kit.customTitle && kit.customTitle.replace(/ /g, '-')}`,
                            ),
                            undefined,
                            { shallow: true },
                          );
                        }}
                      />
                    );
                  }
                })}
              {/* Ad placement */}
            </>
          );
        })}
      </ScrollArea>
    </>
  );
}

export default Sidebar;
