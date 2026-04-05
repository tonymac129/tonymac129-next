export interface UserType {
  kv: object;
  discord_user: DiscordUserType;
  activities: ActivityType[];
  discord_status: string;
  active_on_discord_web: boolean;
  active_on_discord_desktop: boolean;
  active_on_discord_mobile: boolean;
  active_on_discord_embedded: boolean;
  active_on_discord_vr: boolean;
  listening_to_spotify: boolean;
  spotify: null;
}

export interface ActivityType {
  created_at: number;
  emoji?: EmojiType;
  id: string;
  name: string;
  session_id: string;
  state: string;
  type: number;
  application_id?: string;
  assets?: AssetsType;
  buttons?: string[];
  details?: string;
  flags?: number;
  platform?: string;
  timestamps?: TimestampsType;
}

export interface AssetsType {
  large_image: string;
  large_text: string;
  small_image: string;
  small_text: string;
}

export interface EmojiType {
  name: string;
}

export interface TimestampsType {
  start: number;
}

export interface DiscordUserType {
  avatar: string;
  avatar_decoration_data: AvatarDecorationDataType;
  bot: boolean;
  collectibles: CollectiblesType;
  discriminator: string;
  display_name: string;
  display_name_styles: null;
  global_name: string;
  id: string;
  primary_guild: PrimaryGuildType;
  public_flags: number;
  username: string;
}

export interface AvatarDecorationDataType {
  asset: string;
  expires_at: null;
  sku_id: string;
}

export interface CollectiblesType {
  nameplate: NameplateType;
}

export interface NameplateType {
  asset: string;
  expires_at: null;
  label: string;
  palette: string;
  sku_id: string;
}

export interface PrimaryGuildType {
  badge: string;
  identity_enabled: boolean;
  identity_guild_id: string;
  tag: string;
}
