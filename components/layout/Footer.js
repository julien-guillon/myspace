import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fab,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBuilding,
  faEnvelope,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white text-center fixed inset-x-0 bottom-6">
      <nav className="bg-zinc-900 right-0 left-0 z-10 mx-auto flex max-w-sm rounded-full bg-[#111111] font-author text-white dark:text-zinc-900 shadow-lg dark:border dark:bg-white">
        <a
          className="flex-1 items-center rounded-l-3xl p-3 dark:hover:bg-zinc-100 hover:bg-zinc-800"
          href="/"
        >
          <FontAwesomeIcon icon={faHome} />
          <span className="ml-2 text-md dark:text-black font-bold opacity-70">
            Accueil
          </span>
        </a>
        <a
          className="flex-2 items-center p-3 dark:hover:bg-zinc-100 hover:bg-zinc-800"
          href="/work"
        >
          <FontAwesomeIcon icon={faBuilding} />
          <span className="ml-2 text-md dark:text-black font-bold opacity-70">
            Expériences
          </span>
        </a>
        <a
          className="flex-1 items-center p-3 rounded-r-3xl dark:hover:bg-zinc-100 hover:bg-zinc-800"
          href="/work"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="ml-2 text-md dark:text-black font-bold opacity-70">
            Contact
          </span>
        </a>
      </nav>
    </footer>
  );
}
