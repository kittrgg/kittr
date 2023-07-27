import colors from '@Colors';
import { Button, SVG, Spinner } from '@Components/shared';
import { useChannelManagers } from '@Hooks/api/useChannelManagers';
import { useUser } from '@Hooks/useUser';
import { setModal } from '@Redux/slices/dashboard';
import { useManagerRole } from '@Redux/slices/dashboard/selectors';
import { useSelector, useDispatch } from '@Redux/store';
import { capitalizeFirstCharacter } from '@Utils/helpers/capitalizeFirstCharacter';
import { customOrderArray } from '@Utils/helpers/orderArrayByString';
import type { ChannelManagerRoles } from '@kittr/prisma';
import styled from 'styled-components';
import SetNewOwner from '../../modals/SetNewOwner';
import ManagerRoleChange from '../../modals/ManagerRoleChange';
import DeleteManager from '../../modals/DeleteManager';
import ConfirmChangingOwner from '../../modals/ConfirmChangingOwner';
import AddManager from '../../modals/AddManager';
import AboutAccountManagers from '../../modals/AboutAccountManagers';
import H3 from '../../H3';

const managersOrder: ChannelManagerRoles[] = ['OWNER', 'ADMIN', 'EDITOR'];

function AccountManagers() {
  const dispatch = useDispatch();
  const role = useManagerRole();
  const auth = useUser();
  const { type } = useSelector((state) => state.dashboard.modal);

  const { data, isLoading, error } = useChannelManagers();

  return (
    <>
      {type === 'About Account Managers' && <AboutAccountManagers />}
      {type === 'Confirm Changing Owner' && <ConfirmChangingOwner />}
      {type === 'Set New Owner' && <SetNewOwner />}
      {type === 'Add Manager' && <AddManager />}
      {type === 'Manager Role Change' && <ManagerRoleChange />}
      {type === 'Delete Manager' && <DeleteManager />}
      <H3>
        ACCOUNT MANAGERS
        <SVG.QuestionMark
          dataCy="managers-info-question"
          onClick={() =>
            dispatch(setModal({ type: 'About Account Managers', data: {} }))
          }
          style={{
            position: 'relative',
            top: '4px',
            left: '12px',
            cursor: 'pointer',
          }}
          width="20px"
        />
      </H3>
      {error ? (
        <p>
          Uh oh, an error occurred. Let us know with the error code: 4397,
          please.
        </p>
      ) : null}
      {isLoading ? <Spinner /> : null}
      {data
        ? customOrderArray<(typeof data)[0]>({
            array: data,
            sortingArray: managersOrder,
            keyToSort: 'role',
          }).map((manager: (typeof data)[0]) => {
            return (
              <Manager data-cy="manager" key={manager.uid}>
                <Identity>
                  <Email>{manager.email}</Email>
                  {role === 'OWNER' && manager.role === 'OWNER' && (
                    <SVG.Pencil
                      dataCy="change-owner-start"
                      onClick={() =>
                        dispatch(
                          setModal({
                            type: 'Confirm Changing Owner',
                            data: {},
                          }),
                        )
                      }
                      style={{ marginRight: '8px', cursor: 'pointer' }}
                      width="20px"
                    />
                  )}
                  {
                    // Never if the manager is the owner
                    manager.role !== 'OWNER' &&
                      // Never on yourself
                      manager.email !== auth?.email &&
                      // Never if you are an editor
                      role !== 'EDITOR' &&
                      // Never if you are the same role
                      role !== manager.role && (
                        <>
                          <SVG.Pencil
                            dataCy={
                              manager.role === 'EDITOR' ? 'promote' : 'demote'
                            }
                            onClick={() =>
                              dispatch(
                                setModal({
                                  type: 'Manager Role Change',
                                  data: manager,
                                }),
                              )
                            }
                            style={{ marginRight: '8px', cursor: 'pointer' }}
                            width="20px"
                          />
                          <SVG.X
                            dataCy="remove-manager"
                            onClick={() =>
                              dispatch(
                                setModal({
                                  type: 'Delete Manager',
                                  data: manager,
                                }),
                              )
                            }
                            style={{ cursor: 'pointer' }}
                            width="24px"
                          />
                        </>
                      )
                  }
                  {role !== 'OWNER' && manager.email === auth?.email && (
                    <SVG.X
                      dataCy="remove-manager"
                      onClick={() =>
                        dispatch(
                          setModal({ type: 'Delete Manager', data: manager }),
                        )
                      }
                      style={{ cursor: 'pointer' }}
                      width="24px"
                    />
                  )}
                </Identity>
                <Role>{capitalizeFirstCharacter(manager.role)}</Role>
              </Manager>
            );
          })
        : null}

      {role !== 'EDITOR' && (
        <Button
          dataCy="add-manager-begin"
          design="transparent"
          onClick={() => dispatch(setModal({ type: 'Add Manager', data: {} }))}
          style={{ marginTop: '32px' }}
          text="ADD MANAGER"
        />
      )}
    </>
  );
}

export default AccountManagers;

// Styled Components

const Manager = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 20px;

  &:hover {
    background-color: ${colors.darker};
  }
`;

const Identity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Email = styled.p`
  margin: 0 24px;
  color: ${colors.white};
`;

const Role = styled.p``;
