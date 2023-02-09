import { DiscordIcon, GitHubIcon } from "nextra/icons";
import { DiscourseIcon } from "./icons/DiscourseIcon";
import { SignalIcon } from "./icons/SignalIcon";

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

function Signal() {
  return (
    <a
      href="https://signal.group/#CjQKIOGJd99QFmIarJiHL0g-6htrxZjnWqbBENF7MVR_qL_OEhC4tje83JFuhv-JO7j1ypjz"
      className="hidden p-2 text-current sm:flex hover:opacity-75"
      title="Signal Community Group"
      target="_blank"
      rel="noreferrer"
    >
      {/* Nextra icons have a <title> attribute providing alt text */}
      <SignalIcon />
    </a>
  );
}

function Discord() {
  return (
    <a
      href="https://discord.gg/t3t79FWk"
      className="hidden p-2 text-current sm:flex hover:opacity-75"
      title="Rhonix Discord server"
      target="_blank"
      rel="noreferrer"
    >
      <DiscordIcon />
    </a>
  );
}

function Discourse() {
  return (
    <a
      href="https://community.rhonix.io"
      className="hidden p-2 text-current sm:flex hover:opacity-75"
      title="Rhonix Discourse Forum"
      target="_blank"
      rel="noreferrer"
    >
      <DiscourseIcon />
    </a>
  );
}

export { Github, Discourse, Signal };
