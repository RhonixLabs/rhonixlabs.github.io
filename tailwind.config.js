const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{js,tsx}",
    "./layout/**/*.{js,tsx}",
    "./nextra-theme-docs/**/*.{js,tsx}",
    "./pages/**/*.{md,mdx,tsx}",
    "./public/images/svg/**/*.{js,tsx}",
    "./theme.config.js",
  ],
  listStyleType: {
    none: "none",
    disc: "disc",
    decimal: "decimal",
    square: "square",
  },

  theme: {
    extend: {
      fontFamily: {
        sans: [`"Inter"`, "sans-serif"],
        "space-grotesk": ["Space Grotesk", "monospace"],
        mono: [
          "Menlo",
          "Monaco",
          "Lucida Console",
          "Liberation Mono",
          "DejaVu Sans Mono",
          "Bitstream Vera Sans Mono",
          "Courier New",
          "monospace",
        ],
      },
      fontSize: {
        "5xl": "2.5rem",
      },
      spacing: {
        "space-1": "0.25rem",
        "space-2": "0.5rem",
        "space-3": "0.75rem",
        "space-4": "1rem",
        "space-5": "1.5rem",
        "space-6": "2rem",
        "space-7": "2.5rem",
        "space-8": "3rem",
        "space-9": "3.5rem",
        "space-10": "4rem",
        "space-11": "5rem",
        "space-12": "6rem",
        "space-13": "7rem",
        "space-14": "8rem",
      },

      colors: {
        dark: "#000",
        gray: colors.neutral,
        blue: colors.blue,
        orange: colors.orange,
        green: colors.green,
        red: colors.red,
        yellow: colors.yellow,
        "pink-gradient-start": "rgba(255, 30, 86, 1)",
        "rho-white": "#FFFFFF",
        "rho-black": "#000000",
        "rho-off-black": "#252525",
        "rho-lightest-grey": "#EDEDED",
        "rho-light-grey": "#F2F2F2",
        "rho-grey": "#C0C0C0",
        "rho-mid-grey": "#828282",
        "rho-border-grey": "#4f4f4f",
        "rho-box-grey": "#161616",
        "rho-yellow": "#DFFF0B",
        "rho-mint": "#00F780",
        "rho-pink": "#FF077F",
        "rho-purple": "#633DFF",
        "rho-text-muted": "#BFCCD6",
        "rho-border-muted": "#696969",
        "rho-dark-100": "#161616",
        "rho-dark-200": "#404040",
        "rho-dark-300": "#8b8b8b",
        "rho-dark-400": "#C0C0C0",
        "rho-light-100": "#F0F0F0",
        "rho-light-200": "#D2D2D2",
        "rho-light-300": "#A7A7A7",
        "rho-light-400": "#626262",
      },
      scale: {
        185: "1.85",
      },
      opacity: {
        15: ".15",
      },
      screens: {
        betterhover: { raw: "(hover: hover)" },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.rho-mid-grey"),
            "--tw-prose-headings": theme("colors.rho-mid-grey"),
            "--tw-prose-lead": theme("colors.rho-mid-grey"),
            "--tw-prose-links": theme("colors.rho-mid-grey"),
            "--tw-prose-bold": theme("colors.rho-mid-grey"),
            "--tw-prose-counters": theme("colors.rho-mid-grey"),
            "--tw-prose-bullets": theme("colors.rho-mid-grey"),
            "--tw-prose-hr": theme("colors.rho-mid-grey"),
            "--tw-prose-quotes": theme("colors.rho-mid-grey"),
            "--tw-prose-quote-borders": theme("colors.rho-mid-grey"),
            "--tw-prose-captions": theme("colors.rho-mid-grey"),
            "--tw-prose-code": theme("colors.rho-mid-grey"),
            "--tw-prose-pre-code": theme("colors.rho-mid-grey"),
            "--tw-prose-pre-bg": theme("colors.rho-mid-grey"),
            "--tw-prose-th-borders": theme("colors.rho-mid-grey"),
            "--tw-prose-td-borders": theme("colors.rho-mid-grey"),
            "--tw-prose-invert-body": theme("colors.rho-grey"),
            "--tw-prose-invert-headings": theme("colors.rho-grey"),
            "--tw-prose-invert-lead": theme("colors.rho-grey"),
            "--tw-prose-invert-links": theme("colors.rho-grey"),
            "--tw-prose-invert-bold": theme("colors.rho-grey"),
            "--tw-prose-invert-counters": theme("colors.rho-grey"),
            "--tw-prose-invert-bullets": theme("colors.rho-grey"),
            "--tw-prose-invert-hr": theme("colors.rho-grey"),
            "--tw-prose-invert-quotes": theme("colors.rho-grey"),
            "--tw-prose-invert-quote-borders": theme("colors.rho-grey"),
            "--tw-prose-invert-captions": theme("colors.rho-grey"),
            "--tw-prose-invert-code": theme("colors.rho-grey"),
            "--tw-prose-invert-pre-code": theme("colors.rho-grey"),
            "--tw-prose-invert-pre-bg": theme("colors.rho-grey"),
            "--tw-prose-invert-th-borders": theme("colors.rho-grey"),
            "--tw-prose-invert-td-borders": theme("colors.rho-grey"),
            lineHeight: "1.4",

            p: {
              lineHeight: "1.4",
            },
            a: {
              "&:hover": {
                color: "#FF077F !important",
              },
            },
            li: {
              lineHeight: "1.4",
            },
            h2: {
              textTransform: "uppercase",
              borderTop: "solid 1px currentColor",
              paddingTop: "0.4rem",
              marginTop: "2rem",
              marginBottom: "0.75rem",
              lineHeight: "1",
            },
            "--tw-prose-bullets": theme("colors.rho-black"),
            "--tw-prose-invert-bullets": theme("colors.rho-white"),
          },
        },
      }),
      keyframes: {
        "fairground-marquee": {
          from: { backgroundPositionX: 0 },
          to: { backgroundPositionX: "-1326px" },
        },
      },
      animation: {
        "fairground-marquee": "fairground-marquee 10s linear infinite;",
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("tailwindcss-hyphens"),
    require("@tailwindcss/line-clamp"),
  ],
};