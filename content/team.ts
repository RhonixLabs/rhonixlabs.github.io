const TURBO_TEAM: Record<string, AuthorDetails> = {
  nzpr: {
    name: "nzpr",
    twitterUsername: "nzpr",
    picture: "/images/people/nzpr.jpg",
  }
};

export type Author = keyof typeof TURBO_TEAM;
export type AuthorDetails = {
  name: string;
  twitterUsername?: string;
  picture: string;
};

export default TURBO_TEAM;
