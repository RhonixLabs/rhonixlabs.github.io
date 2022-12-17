import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useConfig, useTheme } from "nextra-theme-docs";
import { Footer } from "./components/Footer";
import Navigation from "./components/Navigation";
import HeaderLogo from "./components/HeaderLogo";
import { Discord, Github } from "./components/Social";

const SITE_ROOT = "https://rhonix.io";

/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
const theme = {
  sidebar: {
    defaultMenuCollapseLevel: Number.POSITIVE_INFINITY,
  },
  docsRepositoryBase: "https://github.com/RhonixLabs/rhonix.github.io",
  useNextSeoProps: function SEO() {
    const router = useRouter();
    const { frontMatter } = useConfig();

    let section = "Rhonix";
    if (router?.pathname.startsWith("/learn")) {
      section = "Learn";
    }
    if (router?.pathname.startsWith("/build")) {
      section = "Build";
    }
    if (router?.pathname.startsWith("/explore")) {
      section = "Explore";
    }

    const defaultTitle = frontMatter.overrideTitle || section;

    return {
      description: frontMatter.description,
      defaultTitle,
      titleTemplate: `%s – ${section}`,
    };
  },

  gitTimestamp({ timestamp }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dateString, setDateString] = useState(timestamp.toISOString());

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      try {
        setDateString(
          timestamp.toLocaleDateString(navigator.language, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        );
      } catch (e) {
        // Ignore errors here; they get the ISO string.
        // At least one person out there has manually misconfigured navigator.language.
      }
    }, [timestamp]);

    return <>Last updated on {dateString}</>;
  },
  unstable_staticImage: true,
  toc: {
    float: true,
  },
  font: false,
  feedback: {
    link: "Question? Give us feedback →",
  },
  logo: HeaderLogo,
  logoLink: false,
  head: function Head() {
    const router = useRouter();
    const { systemTheme = "light" } = useTheme();
    const { frontMatter } = useConfig();
    const fullUrl =
      router.asPath === "/" ? SITE_ROOT : `${SITE_ROOT}${router.asPath}`;

    const asPath = router.asPath;

    let ogUrl;

    if (asPath === "/") {
      ogUrl = `${SITE_ROOT}/api/og`;
    } else if (frontMatter?.ogImage) {
      ogUrl = `${SITE_ROOT}${frontMatter.ogImage}`;
    } else {
      const type = asPath.startsWith("/learn")
        ? "learn"
        : asPath.startsWith("/build")
        ? "build"
        : "";
      const title = frontMatter.title
        ? `&title=${encodeURIComponent(frontMatter.title)}`
        : "";

      ogUrl = `${SITE_ROOT}/api/og?type=${type}${title}`;
    }

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`/images/favicon-${systemTheme}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/images/favicon-${systemTheme}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/images/favicon-${systemTheme}/favicon-16x16.png`}
        />
        <link
          rel="mask-icon"
          href={`/images/favicon-${systemTheme}/safari-pinned-tab.svg`}
          color="#000000"
        />
        <link
          rel="shortcut icon"
          href={`/images/favicon-${systemTheme}/favicon.ico`}
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@rhonix" />
        <meta name="twitter:creator" content="@rhonix" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={fullUrl} />
        <link rel="canonical" href={fullUrl} />
        <meta property="twitter:image" content={ogUrl} />
        <meta property="og:image" content={ogUrl} />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:site_name" content="Rhonix" />
        <link rel="prefetch" href="/learn" as="document" />
        <link rel="prefetch" href="/learn/docs" as="document" />
        <link rel="prefetch" href="/build" as="document" />
        <link rel="prefetch" href="/build/docs" as="document" />
      </>
    );
  },
  editLink: {
    text: "Edit this page on GitHub",
  },
  navbar: {
    component: Navigation,
    extraContent: (
      <>
        <Github />
        <Discord />
      </>
    ),
  },
  search: {
    placeholder: "Search documentation…",
  },
  footer: {
    component: Footer,
  },
  nextThemes: {
    defaultTheme: "light",
  },
};
export default theme;
