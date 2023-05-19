export interface IWarzoneWeaponStats {
  accuracy: number;
  range: number;
  mobility: number;
  damage: number;
  fireRate: number;
  control: number;
}

export interface IWarzoneGameInfo {
  /** Text description of the Base */
  blurb: string;
  /** Statistical performance info for the Base  */
  stats: IWarzoneWeaponStats;
}

export interface IWarzoneAttachmentSlots {
  Muzzle?: string;
  Barrel?: string;
  Laser?: string;
  Guard?: string;
  Optic?: string;
  Stock?: string;
  Underbarrel?: string;
  ['Trigger Action']?: string;
  ['Bolt Assembly']?: string;
  Ammunition?: string;
  ['Rear Grip']?: string;
  ['Pump Grip']?: string;
  Perk?: string;
  Pumps?: string;
}
