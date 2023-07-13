export interface ChannelType {
  id: number;
  user_id: number;
  slug: string;
  is_banned: boolean;
  playback_url: string;
  vod_enabled: boolean;
  subscription_enabled: boolean;
  followers_count: number;
  following: boolean;
  subscription: any;
  subscriber_badges: SubscriberBadge[];
  banner_image: BannerImage;
  livestream: Livestream;
  role: any;
  muted: boolean;
  follower_badges: any[];
  offline_banner_image: any;
  verified: boolean;
  recent_categories: RecentCategory[];
  can_host: boolean;
  user: User;
  chatroom: Chatroom;
}

export interface SubscriberBadge {
  id: number;
  channel_id: number;
  months: number;
  badge_image: BadgeImage;
}

export interface BadgeImage {
  srcset: string;
  src: string;
}

export interface BannerImage {
  url: string;
}

export interface Livestream {
  id: number;
  slug: string;
  channel_id: number;
  created_at: string;
  session_title: string;
  is_live: boolean;
  risk_level_id: any;
  source: any;
  twitch_channel: any;
  duration: number;
  language: string;
  is_mature: boolean;
  viewer_count: number;
  thumbnail: Thumbnail;
  categories: Category[];
  tags: any[];
}

export interface Thumbnail {
  url: string;
}

export interface Category {
  id: number;
  category_id: number;
  name: string;
  slug: string;
  tags: string[];
  description: any;
  deleted_at: any;
  viewers: number;
  category: Category2;
}

export interface Category2 {
  id: number;
  name: string;
  slug: string;
  icon: string;
}

export interface RecentCategory {
  id: number;
  category_id: number;
  name: string;
  slug: string;
  tags: string[];
  description?: string;
  deleted_at: any;
  viewers: number;
  banner: Banner;
  category: Category3;
}

export interface Banner {
  responsive: string;
  url: string;
}

export interface Category3 {
  id: number;
  name: string;
  slug: string;
  icon: string;
}

export interface User {
  id: number;
  username: string;
  agreed_to_terms: boolean;
  email_verified_at: string;
  bio: string;
  country: string;
  state: string;
  city: string;
  instagram: string;
  twitter: string;
  youtube: string;
  discord: string;
  tiktok: string;
  facebook: string;
  profile_pic: string;
}

export interface Chatroom {
  id: number;
  chatable_type: string;
  channel_id: number;
  created_at: string;
  updated_at: string;
  chat_mode_old: string;
  chat_mode: string;
  slow_mode: boolean;
  chatable_id: number;
  followers_mode: boolean;
  subscribers_mode: boolean;
  emotes_mode: boolean;
  message_interval: number;
  following_min_duration: number;
}
