import RhonixLogo, { RhonixLogoCondensed } from "./logos/Rhonix";
import SiteSwitcher from "./SiteSwitcher";
import Link from "next/link";
import styles from "./header-logo.module.css";
import { useTheme } from "next-themes";

function HeaderLogo() {
  return (
    <>
      <Link href="/" title="Home" className="hover:opacity-75">
        <RhonixLogo height={32} className={styles.desktopLogo} />
        <RhonixLogoCondensed height={32} className={styles.mobileLogo} />
      </Link>
      <div className={styles.siteSwitcher}>
        <SiteSwitcher />
      </div>
    </>
  );
}

export default HeaderLogo;
