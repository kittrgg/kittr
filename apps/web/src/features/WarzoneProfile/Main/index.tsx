import colors from '@Colors';
import { Button, SupportUs, SVG } from '@Components/shared';
import { FirebaseStorageResolver } from '@Components/shared/FirebaseStorageResolver';
import { useChannelProfileData } from '@Hooks/trpc/useChannelProfileData';
import { useActiveChannelKit } from '@Hooks/useActiveChannelKit';
import { useDetectAdBlock } from '@Hooks/useDetectAdBlock';
import { useViewportDimensions } from '@Hooks/useViewportDimensions';
import { setIsSidebarOpen } from '@Redux/slices/displayr';
import { useSidebarState } from '@Redux/slices/displayr/selectors';
import { useDispatch } from '@Redux/store';
import Ad from '@Services/venatus/Ad';
import type { ChannelCreatorCode, Game } from '@kittr/prisma';
import { Container, SimpleGrid } from '@mantine/core';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import WeaponBlurb from './WeaponBlurb';
import TopBar from './TopBar';
import Popularity from './Popularity';
import KitScroller from './KitScroller';
import Imagery from './Imagery';
import FavoriteBlueprint from './FavoriteBlueprint';
import ChannelQuote from './ChannelQuote';
import Attachments from './Attachments';
import AdTile from './AdTile';

function Marketing() {
  const areAdsBlocked = useDetectAdBlock();
  const { width } = useViewportDimensions();
  const isMobile = width <= 1050;

  if (!isMobile && areAdsBlocked) {
    return <SupportUs containerStyles={{ width: '100%' }} />;
  }

  if (!isMobile) {
    return <AdTile />;
  }

  return null;
}

function Main() {
  const dispatch = useDispatch();
  // Const activeWeapon = useActiveWeapon()
  // Const channelData = useChannel()
  const { width } = useViewportDimensions();
  const isMobile = width <= 1050;
  // Const containerRef = useRef(null) as any
  // Const { query, isReady } = useRouter()
  const { query } = useRouter();
  const weaponTerm =
    Object.keys(query).length > 1 ? query.weapon || query.k : '';
  const { data: channelData } = useChannelProfileData();
  const activeWeapon = useActiveChannelKit();
  // Const isSidebarOpen = useSidebarState()
  // Const [scrollLocked, setScrollLocked] = useScrollLock()

  // UseEffect(() => {
  // 	If (isSidebarOpen && isMobile) {
  // 		SetScrollLocked(true)
  // 	} else {
  // 		SetScrollLocked(false)
  // 	}
  // 	// eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isSidebarOpen, isMobile])

  return (
    <SimpleGrid
      breakpoints={[{ maxWidth: 1050, cols: 1 }]}
      cols={2}
      style={{
        paddingLeft: !isMobile ? '325px' : 0,
        paddingRight: '1em',
        paddingTop: '5.5rem',
      }}
    >
      <FirebaseStorageResolver
        noSpinner
        path="/warzone/background-image.png"
        render={(imagePath) => <BackgroundImage imagePath={imagePath} />}
      />
      {isMobile ? (
        <Button
          dataCy="kit-list-opener"
          endIcon={
            <SVG.Carat
              fill={colors.white}
              style={{
                width: '24px',
                marginLeft: '4px',
                transform: 'rotate(90deg)',
              }}
            />
          }
          onClick={() => dispatch(setIsSidebarOpen(true))}
          style={{
            width: '100%',
            marginTop: '12px',
            gridColumnStart: '1',
            gridColumnEnd: isMobile ? '2' : '3',
            justifySelf: 'center',
            alignSelf: 'center',
          }}
          text="Kits"
        />
      ) : null}
      {activeWeapon && Object.keys(activeWeapon).length > 0 && weaponTerm ? (
        <>
          {!isMobile && channelData ? (
            <TopBar
              displayName={channelData.displayName}
              gameCreatorCode={
                channelData.gameCreatorCodes.find(
                  (
                    code: ChannelCreatorCode & {
                      game: Game;
                    },
                  ) => code.game.displayName === 'Warzone',
                )?.code || ''
              }
              hasProfileImage={channelData.profile?.hasProfileImage || false}
              id={channelData.id}
              links={channelData.links}
            />
          ) : null}
          {isMobile && channelData ? (
            <KitScroller
              availableKits={
                channelData.warzoneKits ?? channelData.warzoneTwoKits
              }
            />
          ) : null}
          {isMobile ? (
            <div>
              {/* <Ad placementType="d300x50" updateTrigger={activeWeapon} /> */}
            </div>
          ) : null}
          {isMobile ? (
            <>
              <Imagery />
              <Attachments />
            </>
          ) : (
            <>
              <Attachments />
              <Imagery />
            </>
          )}
          <ChannelQuote />
          <Marketing />
          {/* <WeaponStats /> */}
          {isMobile ? (
            <div>
              {/* <Ad placementType="d300x50" updateTrigger={activeWeapon} /> */}
            </div>
          ) : null}
          <Popularity />
          <div style={{ display: 'grid', gap: '12px' }}>
            <WeaponBlurb />
            <FavoriteBlueprint />
          </div>
          {isMobile ? (
            <div>
              {/* <Ad placementType="s300x250" updateTrigger={activeWeapon} /> */}
            </div>
          ) : null}
        </>
      ) : null}
      {!activeWeapon && (
        <Container style={{ marginTop: isMobile ? '2em' : '10em' }}>
          <SVG.Arrow
            style={{
              marginRight: '12px',
              transform: `rotate(${isMobile ? '0deg' : '-90deg'})`,
            }}
            width="18px"
          />
          SELECT A KIT.
        </Container>
      )}
    </SimpleGrid>
  );
}

export default Main;

// Styled Components

// Const Container = styled.div<{ hasWeapon: boolean }>`
// 	Flex: 1;
// 	Position: relative;
// 	Overflow-x: hidden;
// 	Overflow-y: auto;
// 	Display: ${(props) => (props.hasWeapon ? "grid" : "")};
// 	Grid-template-columns: ${(props) => (props.hasWeapon ? "1fr 1fr" : "1fr")};
// 	Gap: 12px;

// 	Padding: 0 2% 36px;

// 	@media (max-width: 1050px) {
// 		Flex: initial;
// 		Grid-template-columns: 1fr;
// 		Width: 100%;
// 		Margin-top: 0;
// 		Padding-top: 0;
// 		Overflow-y: auto;
// 		-webkit-overflow-scrolling: touch;
// 	}

// 	&::-webkit-scrollbar {
// 		Width: 8px;
// 	}

// 	&::-webkit-scrollbar-track {
// 		Background: transparent;
// 	}

// 	&::-webkit-scrollbar-thumb {
// 		Background-color: ${colors.lightest};
// 		Border: 5px solid transparent;
// 	}
// `

const BackgroundImage = styled.div<{ imagePath: string }>`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  margin-left: -2%;
  background: url(${(props) => props.imagePath});
  background-size: cover;
  background-position: bottom;
  filter: blur(6px) brightness(0.3);
  mask-image: linear-gradient(to top, black 90%, transparent 100%);

  @media (max-width: 1050px) {
  }
`;
