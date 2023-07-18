import colors from '@Colors';
import {
  Button,
  ProfileImage,
  Spinner,
  SupportUs,
  SVG,
} from '@Components/shared';
// Import { useManagedChannels } from "@Hooks/api/useManagedChannels"
import { useUser } from '@Hooks/useUser';
import {
  setActiveView,
  setChannelView,
  setModal,
} from '@Redux/slices/dashboard';
import { useModal } from '@Redux/slices/dashboard/selectors';
import { useDispatch, useSelector } from '@Redux/store';
import { header1, header2, paragraph } from '@Styles/typography';
import { capitalizeFirstCharacter } from '@Utils/helpers/capitalizeFirstCharacter';
import type { MutableRefObject } from 'react';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import CreateChannelModal from './modals/CreateChannel';
import LogoutButton from './ProfileButtons';
import { trpc } from '@/lib/trpc';

/** List the channels for a user */
function CreatorList() {
  const dispatch = useDispatch();
  const modalData = useModal().data;
  const ref = useRef() as MutableRefObject<HTMLButtonElement>;
  const divRef = useRef() as MutableRefObject<HTMLDivElement>;
  const {
    data: channels,
    isFetching: isFetchingChannels,
    refetch,
  } = trpc.managers.channels.list.useQuery();

  const user = useUser();
  const modal = useSelector((state) => state.dashboard.modal);

  /** Set tutorial ref data */
  useEffect(() => {
    if (modal.data?.page === 2 && ref) {
      dispatch(
        setModal({
          type: 'Tutorial',
          data: {
            page: modal.data.page,
            ref: ref.current.getBoundingClientRect().top * 0.4,
          },
        }),
      );
    }
    if (channels && modal.data?.page === 3) {
      dispatch(
        setModal({
          type: 'Tutorial',
          data: {
            page: modal.data.page,
            ref: divRef.current.getBoundingClientRect().top * 0.4,
          },
        }),
      );
    }
  }, [modal.data?.page, channels, ref, dispatch]);

  return (
    <>
      {modal.type === 'Create New Channel' && <CreateChannelModal />}
      <Container>
        <SupportUs containerStyles={{ width: '100%', margin: '32px 0' }} />
        <Header data-cy="your-channels-title">
          YOUR CHANNELS{' '}
          <SVG.Renew
            dataCy="renew-svg"
            onClick={() => refetch()}
            style={{ cursor: 'pointer' }}
            width="24px"
          />
        </Header>
        {isFetchingChannels ? <Spinner height="100px" width="100%" /> : null}
        {!isFetchingChannels && Boolean(user) && channels
          ? channels.map((elem) => (
              <BorderWrapper
                isPremium={elem.plan?.type === 'PREMIUM'}
                key={elem.id}
              >
                <ChannelContainer
                  data-cy={`${elem.displayName}-channel-button`}
                  key={elem.id}
                  onClick={() => {
                    dispatch(
                      setChannelView({
                        gameId: '',
                        view: 'Channel Settings',
                      }),
                    );
                    dispatch(
                      setActiveView({
                        channelId: elem.id,
                        view: 'Channel',
                      }),
                    );
                    modal.type === 'Tutorial' &&
                      dispatch(
                        setModal({
                          type: modal.type,
                          data: {
                            page: modal.data?.page + 1,
                          },
                        }),
                      );
                  }}
                  ref={divRef}
                  style={
                    modalData?.page === 3
                      ? { position: 'relative', zIndex: 101 }
                      : undefined
                  }
                >
                  <FlexRow>
                    <ProfileImage
                      alwaysRefresh
                      hasProfileImage={Boolean(elem.profile?.hasProfileImage)}
                      imagePath={elem.id}
                      size="50px"
                    />
                    <ChannelTitle>{elem.displayName}</ChannelTitle>
                  </FlexRow>
                  <Role>
                    Your role is{' '}
                    {capitalizeFirstCharacter(
                      elem.managers.find(
                        (manager) => manager.firebaseId === user?.uid,
                      )?.role ?? '',
                    )}{' '}
                    for this channel.
                  </Role>
                </ChannelContainer>
              </BorderWrapper>
            ))
          : null}

        {!isFetchingChannels && channels?.length === 0 && (
          <Container
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              columnGap: '20px',
            }}
          >
            <Button
              dataCy="start-tutorial-button"
              design="default"
              onClick={() => {
                dispatch(setModal({ type: 'Tutorial', data: { page: 1 } }));
              }}
              text="Need some guidance? Click here for tutorial!"
            />
          </Container>
        )}
        <Button
          buttonRef={ref}
          dataCy="create-new-channel"
          design="transparent"
          onClick={() =>
            modal.data?.page === 2
              ? dispatch(
                  setModal({
                    type: 'Create New Channel',
                    data: { isTutorial: true },
                  }),
                )
              : dispatch(setModal({ type: 'Create New Channel', data: {} }))
          }
          style={{
            width: '100%',
            marginTop: '24px',
            position: modal.type === 'Tutorial' ? 'relative' : undefined,
            zIndex:
              modal.type === 'Tutorial' && modalData?.page === 2
                ? 101
                : undefined,
            backgroundColor: colors.light,
          }}
          text="Create A New Channel"
        />
        <LogoutButton />
      </Container>
    </>
  );
}

export default CreatorList;

// Styled Components

const Container = styled.div``;

const Header = styled.h1`
  margin-bottom: 32px;
  ${header1};
`;

const BorderWrapper = styled.div<{ isPremium: boolean }>`
  margin: 20px 0;
  padding: 5px;
  background-image: ${(props) =>
    props.isPremium ? colors.premiumGradient : colors.darker};
  border-radius: 20px;
`;

const ChannelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 18px;
  background-color: ${colors.darker};
  border-radius: 20px;
  cursor: pointer;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 45%;
`;

const ChannelTitle = styled.h2`
  width: 85%;
  margin-left: 24px;
  ${header2};
  font-size: 18px;
  word-wrap: nowrap;
  overflow: hidden;
  mask-image: linear-gradient(to right, black 40%, transparent 98%);
`;

const Role = styled.h3`
  color: ${colors.white};
  ${paragraph};
  text-align: right;
`;
