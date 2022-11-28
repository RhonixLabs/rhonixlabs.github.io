import { DiscordIcon, GitHubIcon } from "nextra/icons";

function Github() {
  return (
    <a
      href="https://github.com/RhonixLabs/rhonix"
      className="hidden p-2 text-current sm:flex hover:opacity-75"
      title="Rhonix GitHub repo"
      target="_blank"
      rel="noreferrer"
    >
      {/* Nextra icons have a <title> attribute providing alt text */}
      <GitHubIcon />
    </a>
  );
}

function Discord() {
  return (
    <a
      href="https://rhonix.de/discord"
      className="hidden p-2 text-current sm:flex hover:opacity-75"
      title="Rhonix Discord server"
      target="_blank"
      rel="noreferrer"
    >
      <DiscordIcon />
    </a>
  );
}

export { Github, Discord };
