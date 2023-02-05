import { RhonixIcon, RhonixIconCondensed } from "./icons/RhonixIcon";
import SiteSwitcher from "./SiteSwitcher";
import Link from "next/link";
import styles from "./header-logo.module.css";
import { useTheme } from "next-themes";

function HeaderLogo() {
  return (
    <>
      <div className="flex items-center space-between w-full">
        <Link href="/" title="Home" className="hover:opacity-75">
          <RhonixIcon height={120} className={styles.desktopLogo} />
          <RhonixIconCondensed height={38} className={styles.mobileLogo} />
        </Link>
        <div className={styles.siteSwitcher}>
          <SiteSwitcher />
        </div>
      </div>
    </>
  );
}

export default HeaderLogo;
