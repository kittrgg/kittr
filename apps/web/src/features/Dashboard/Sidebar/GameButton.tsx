import colors from '@Colors';
import { FirebaseStorageResolver } from '@Components/shared/FirebaseStorageResolver';
import SVG from '@Components/shared/SVG';
import {
  setChannelView,
  setModal,
  handleTutorialAction,
} from '@Redux/slices/dashboard';
import { useManagerRole, useModal } from '@Redux/slices/dashboard/selectors';
import { useDispatch } from '@Redux/store';
import type { Game } from '@kittr/prisma';
import type { MutableRefObject } from 'react';
import { useState, useRef, useEffect } from 'react';
import * as Styled from './style';

interface Props {
  /** The game for this button. */
  game: Game;
  /** If the game is currently in view. */
  activeView: string | boolean;
}

/** A button to open up a game that is on this channel's profile. */
function GameButton({ game, activeView }: Props) {
  const dispatch = useDispatch();
  const modal = useModal();
  const ref = useRef() as MutableRefObject<HTMLButtonElement>;
  const role = useManagerRole();
  const [isHovered, setIsHovered] = useState(false);
  /** Tutorial ref data */
  useEffect(() => {
    if (modal.data?.page === 5 && ref.current) {
      dispatch(
        setModal({
          type: 'Tutorial',
          data: {
            page: modal.data.page,
            ref: ref.current.getBoundingClientRect().top * 0.85,
          },
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal.data?.page, ref.current]);

  const isOwnerOrAdmin = role === 'ADMIN' || role === 'OWNER';

  return (
    <Styled.ButtonContainer
      isActive={activeView}
      key={game.id}
      style={{ zIndex: modal.type === 'Tutorial' ? 101 : 100 }}
    >
      <Styled.Button
        data-cy={`${game.urlSafeName}-sidebar-button`}
        onClick={() => {
          dispatch(
            handleTutorialAction({
              condition: modal.type === 'Tutorial',
              trueState: {
                type: 'Tutorial',
                data: { page: modal.data.page + 1 },
              },
              falseState: { type: '', data: {} },
            }),
          );
          dispatch(setChannelView({ gameId: game.id, view: game.urlSafeName }));
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={ref}
      >
        <FirebaseStorageResolver
          noSpinner
          path={game.titleImageUrl}
          render={(img) => (
            <img
              alt={game.displayName}
              src={img}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
        />
      </Styled.Button>
      {isOwnerOrAdmin ? (
        <Styled.DeleteGameBubble
          data-cy={`${game.urlSafeName}-delete-sidebar-button`}
          isHovered={isHovered}
          onClick={() =>
            dispatch(
              setModal({
                type: 'Delete Game',
                data: { idToDelete: game.id },
              }),
            )
          }
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <SVG.X fill={colors.red} style={{ width: '100%', height: '100%' }} />
        </Styled.DeleteGameBubble>
      ) : null}
    </Styled.ButtonContainer>
  );
}

export default GameButton;
