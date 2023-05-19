export interface StreamerViewCounts {
  startDate: string;
  endDate: string;
}

export interface NextClientEndpointError {
  error: boolean;
  errorMessage: string;
}

export type NextClientPayload<T> = NextClientEndpointError | T;

export interface NextServerError {
  error: boolean;
  errorMessage: string;
}

export type NextServerPayload<T> = NextServerError | T;

export interface ReduxModalState {
  type: DashboardModals;
  data: any;
}

/** Workflows that users can utilize to add their commands to their channel */
export type TCommandMethod = 'channel-elements' | 'dashboard' | 'nightbot';

/** Twitch command strategies to add kittr commands to chat */
export type TTwitchStrategy = '!addcom' | '!commands add' | '!editcom';

export type SocialPlatform =
  | 'discord'
  | 'facebook'
  | 'instagram'
  | 'tiktok'
  | 'twitch'
  | 'twitter'
  | 'youtube';

/** Dasbhoard Modal Options */
export type DashboardModals =
  | ''
  | 'About Account Managers'
  | 'Add Affiliate'
  | 'Add Game'
  | 'Add Link'
  | 'Add Manager'
  | 'Add Spec'
  | 'Channel Deleter'
  | 'Confirm Changing Owner'
  | 'Create New Channel'
  | 'Delete Game'
  | 'Delete Manager'
  | 'Error Notification'
  | 'Export Bot Commands'
  | 'Help'
  | 'Kit Delete Confirmation'
  | 'Kit Naming Warning'
  | 'Manager Role Change'
  | 'Premium Plans'
  | 'Premium Sign Up'
  | 'Quick Command Export'
  | 'Set New Owner'
  | 'Tutorial';

export type ActiveKitOverlays =
  | 'Banner Ticker'
  | 'Banner'
  | 'Display Ticker'
  | 'Display';
