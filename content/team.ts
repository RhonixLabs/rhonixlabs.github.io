const RHONIX_TEAM: Record<string, AuthorDetails> = {
  nzpr: {
    name: "nzpr",
    twitterUsername: "nzpr",
    picture: "/images/people/nzpr.jpeg",
  },
  joshy: {
    name: "Joshy Orndorff",
    twitterUsername: "joshy",
    picture: "/images/people/josh.png",
  },
};

export type Author = keyof typeof RHONIX_TEAM;
export type AuthorDetails = {
  name: string;
  twitterUsername?: string;
  picture: string;
};

export default RHONIX_TEAM;
