

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
    date: "2023 Q2",
    name: "Integration phase",
    title: "Integrate new features into codebase",
    description: ["Upgrading of the execution logic"]

  },
  {
    date: "2023 Q3",
    name: "Testnet 2.0",
    title: "Startup phase of the testnet 2.0",
    description: ["Testnet 2.0 warmup", "Enable External Validators", "Upgrade Rholang Engine to Rust", "Migrate dApps"]

  },
  {
    date: "2023 Q4",
    name: "Mainnet 2.0",
    title: "Secure Mainnet 2.0 rollout",
    description: ["Mainnet 2.0", "List on Exchanges"]

  },
  {
    date: "2024 Q1",
    name: "Sharding",
    title: "Enable subshards",
    description: ["Sharding enabling for subnetworks", "Inter blockchain communications to cosmos and other chains"]

  },
  {
    date: "2024 Q2",
    name: "Validator clusters",
    title: "Integrate large validator clusters",
    description: ["Integrate large validator clusters", "Onboarding enterprises"]

  }]





