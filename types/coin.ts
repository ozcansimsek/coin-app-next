export interface Platforms {}

export interface CountryCodes {
  en: string;
  de: string;
  es: string;
  fr: string;
  it: string;
  pl: string;
  ro: string;
  hu: string;
  nl: string;
  pt: string;
  sv: string;
  vi: string;
  tr: string;
  ru: string;
  ja: string;
  zh: string;
  "zh-tw": string;
  ko: string;
  ar: string;
  th: string;
  id: string;
}

export interface ReposUrl {
  github: string[];
  bitbucket: any[];
}

export interface Links {
  homepage: string[];
  blockchain_site: string[];
  official_forum_url: string[];
  chat_url: string[];
  announcement_url: string[];
  twitter_screen_name: string;
  facebook_username: string;
  bitcointalk_thread_identifier?: any;
  telegram_channel_identifier: string;
  subreddit_url: string;
  repos_url: ReposUrl;
}

export interface Image {
  thumb: string;
  small: string;
  large: string;
}

export interface CurrencyNames {
  aed: string;
  ars: string;
  aud: string;
  bch: string;
  bdt: string;
  bhd: string;
  bmd: string;
  bnb: string;
  brl: string;
  btc: string;
  cad: string;
  chf: string;
  clp: string;
  cny: string;
  czk: string;
  dkk: string;
  dot: string;
  eos: string;
  eth: string;
  eur: string;
  gbp: string;
  hkd: string;
  huf: string;
  idr: string;
  ils: string;
  inr: string;
  jpy: string;
  krw: string;
  kwd: string;
  lkr: string;
  ltc: string;
  mmk: string;
  mxn: string;
  myr: string;
  ngn: string;
  nok: string;
  nzd: string;
  php: string;
  pkr: string;
  pln: string;
  rub: string;
  sar: string;
  sek: string;
  sgd: string;
  thb: string;
  try: string;
  twd: string;
  uah: string;
  usd: string;
  vef: string;
  vnd: string;
  xag: string;
  xau: string;
  xdr: string;
  xlm: string;
  xrp: string;
  yfi: string;
  zar: string;
  bits: string;
  link: string;
  sats: string;
}

export interface Currencies {
  aed: number;
  ars: number;
  aud: number;
  bch: number;
  bdt: number;
  bhd: number;
  bmd: number;
  bnb: number;
  brl: number;
  btc: number;
  cad: number;
  chf: number;
  clp: number;
  cny: number;
  czk: number;
  dkk: number;
  dot: number;
  eos: number;
  eth: number;
  eur: number;
  gbp: number;
  hkd: number;
  huf: number;
  idr: number;
  ils: number;
  inr: number;
  jpy: number;
  krw: number;
  kwd: number;
  lkr: number;
  ltc: number;
  mmk: number;
  mxn: number;
  myr: number;
  ngn: number;
  nok: number;
  nzd: number;
  php: number;
  pkr: number;
  pln: number;
  rub: number;
  sar: number;
  sek: number;
  sgd: number;
  thb: number;
  try: number;
  twd: number;
  uah: number;
  usd: number;
  vef: number;
  vnd: number;
  xag: number;
  xau: number;
  xdr: number;
  xlm: number;
  xrp: number;
  yfi: number;
  zar: number;
  bits: number;
  link: number;
  sats: number;
}

export interface CurrenciesDate {
  aed: Date;
  ars: Date;
  aud: Date;
  bch: Date;
  bdt: Date;
  bhd: Date;
  bmd: Date;
  bnb: Date;
  brl: Date;
  btc: Date;
  cad: Date;
  chf: Date;
  clp: Date;
  cny: Date;
  czk: Date;
  dkk: Date;
  dot: Date;
  eos: Date;
  eth: Date;
  eur: Date;
  gbp: Date;
  hkd: Date;
  huf: Date;
  idr: Date;
  ils: Date;
  inr: Date;
  jpy: Date;
  krw: Date;
  kwd: Date;
  lkr: Date;
  ltc: Date;
  mmk: Date;
  mxn: Date;
  myr: Date;
  ngn: Date;
  nok: Date;
  nzd: Date;
  php: Date;
  pkr: Date;
  pln: Date;
  rub: Date;
  sar: Date;
  sek: Date;
  sgd: Date;
  thb: Date;
  try: Date;
  twd: Date;
  uah: Date;
  usd: Date;
  vef: Date;
  vnd: Date;
  xag: Date;
  xau: Date;
  xdr: Date;
  xlm: Date;
  xrp: Date;
  yfi: Date;
  zar: Date;
  bits: Date;
  link: Date;
  sats: Date;
}

export interface MarketData {
  current_price: Currencies;
  total_value_locked?: any;
  mcap_to_tvl_ratio?: any;
  fdv_to_tvl_ratio?: any;
  roi?: any;
  ath: Currencies;
  ath_change_percentage: Currencies;
  ath_date: CurrenciesDate;
  atl: Currencies;
  atl_change_percentage: Currencies;
  atl_date: CurrenciesDate;
  market_cap: Currencies;
  market_cap_rank: number;
  fully_diluted_valuation: Currencies;
  total_volume: Currencies;
  high_24h: Currencies;
  low_24h: Currencies;
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  price_change_percentage_14d: number;
  price_change_percentage_30d: number;
  price_change_percentage_60d: number;
  price_change_percentage_200d: number;
  price_change_percentage_1y: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  price_change_24h_in_currency: Currencies;
  price_change_percentage_1h_in_currency: Currencies;
  price_change_percentage_24h_in_currency: Currencies;
  price_change_percentage_7d_in_currency: Currencies;
  price_change_percentage_14d_in_currency: Currencies;
  price_change_percentage_30d_in_currency: Currencies;
  price_change_percentage_60d_in_currency: Currencies;
  price_change_percentage_200d_in_currency: Currencies;
  price_change_percentage_1y_in_currency: Currencies;
  market_cap_change_24h_in_currency: Currencies;
  market_cap_change_percentage_24h_in_currency: Currencies;
  total_supply: number;
  max_supply: number;
  circulating_supply: number;
  last_updated: Date;
}

export interface CommunityData {
  facebook_likes?: any;
  twitter_followers: number;
  reddit_average_posts_48h: number;
  reddit_average_comments_48h: number;
  reddit_subscribers: number;
  reddit_accounts_active_48h: number;
  telegram_channel_user_count?: any;
}

export interface CodeAdditionsDeletions4Weeks {
  additions: number;
  deletions: number;
}

export interface DeveloperData {
  forks: number;
  stars: number;
  subscribers: number;
  total_issues: number;
  closed_issues: number;
  pull_requests_merged: number;
  pull_request_contributors: number;
  code_additions_deletions_4_weeks: CodeAdditionsDeletions4Weeks;
  commit_count_4_weeks: number;
  last_4_weeks_commit_activity_series: any[];
}

export interface PublicInterestStats {
  alexa_rank: number;
  bing_matches?: any;
}

export interface Market {
  name: string;
  identifier: string;
  has_trading_incentive: boolean;
}

export interface ConvertedLast {
  btc: number;
  eth: number;
  usd: number;
}

export interface ConvertedVolume {
  btc: number;
  eth: number;
  usd: number;
}

export interface Ticker {
  base: string;
  target: string;
  market: Market;
  last: number;
  volume: number;
  converted_last: ConvertedLast;
  converted_volume: ConvertedVolume;
  trust_score: string;
  bid_ask_spread_percentage: number;
  timestamp: Date;
  last_traded_at: Date;
  last_fetch_at: Date;
  is_anomaly: boolean;
  is_stale: boolean;
  trade_url: string;
  token_info_url?: any;
  coin_id: string;
  target_coin_id: string;
}

export interface Coin {
  id: string;
  symbol: string;
  name: string;
  asset_platform_id?: any;
  platforms: Platforms;
  block_time_in_minutes: number;
  hashing_algorithm: string;
  categories: string[];
  public_notice?: any;
  additional_notices: any[];
  localization: CountryCodes;
  description: CountryCodes;
  links: Links;
  image: Image;
  country_origin: string;
  genesis_date: string;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  market_cap_rank: number;
  coingecko_rank: number;
  coingecko_score: number;
  developer_score: number;
  community_score: number;
  liquidity_score: number;
  public_interest_score: number;
  market_data: MarketData;
  community_data: CommunityData;
  developer_data: DeveloperData;
  public_interest_stats: PublicInterestStats;
  status_updates: any[];
  last_updated: Date;
  tickers: Ticker[];
}
