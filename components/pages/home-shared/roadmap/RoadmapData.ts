

export type Description = Array<string>

export type Milestone = {
  date: string;
  name: string;
  title: string;
  description: Description;
};

export type Milestones = Array<Milestone>


export const milestones: Milestones =
  [{
    date: "2022 H1",
    name: "Restricted Mainnet",
    title: "Secure and govern the network",
    description: ["Validators run a decentralised network connected to the Ethereum mainnet", "Create and vote on governance proposals", "Stake and delegate tokens"]

  },
  {
    date: "2022 H2",
    name: "Restricted Mainnet",
    title: "Secure and govern the network",
    description: ["Validators run a decentralised network connected to the Ethereum mainnet", "Create and vote on governance proposals", "Stake and delegate tokens"]

  },
  {
    date: "2022 H3",
    name: "Restricted Mainnet",
    title: "Secure and govern the network",
    description: ["Validators run a decentralised network connected to the Ethereum mainnet", "Create and vote on governance proposals", "Stake and delegate tokens"]

  }]





