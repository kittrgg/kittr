import type { ChannelManagerRoles } from '.prisma/client';

export interface IManager {
  /** UID of the user from Firebase */
  uid: string;
  /** kittr management role for this channel */
  role: 'Administrator' | 'Editor' | 'Owner';
}

export interface IManagerData {
  /** UID of the user from Firebase */
  uid: string;
  /** User's display name */
  displayName: string;
  /** Email for the user */
  email: string;
  /** kittr management role for this channel */
  role: ChannelManagerRoles;
}
