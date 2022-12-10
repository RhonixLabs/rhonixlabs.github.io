const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,
  unstable_staticImage: true,
});

const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const OLD_TURBOREPO_ROUTES = [
  "/docs",
  "/docs/ci/circleci",
  "/docs/ci/github-actions",
  "/docs/ci/gitlabci",
  "/docs/ci/travisci",
  "/docs/core-concepts/caching",
  "/docs/core-concepts/remote-caching",
  "/docs/core-concepts/scopes",
  "/docs/core-concepts/monorepos/filtering",
  "/docs/core-concepts/monorepos/running-tasks",
  "/docs/getting-started/create-new",
  "/docs/getting-started/existing-monorepo",
  "/docs/handbook",
  "/docs/handbook/building-your-app",
  "/docs/handbook/deploying-with-docker",
  "/docs/handbook/dev",
  "/docs/handbook/linting",
  "/docs/handbook/migrating-to-a-monorepo",
  "/docs/handbook/package-installation",
  "/docs/handbook/publishing-packages",
  "/docs/handbook/sharing-code",
  "/docs/handbook/testing",
  "/docs/handbook/troubleshooting",
  "/docs/handbook/what-is-a-monorepo",
  "/docs/handbook/workspaces",
  "/docs/handbook/linting/eslint",
  "/docs/handbook/linting/typescript",
  "/docs/handbook/publishing-packages/bundling",
  "/docs/handbook/publishing-packages/versioning-and-publishing",
  "/docs/handbook/sharing-code/internal-packages",
  "/docs/reference/codemods",
  "/docs/reference/command-line-reference",
  "/docs/reference/configuration",
  "/docs/acknowledgements",
  "/docs/ci",
  "/docs/faq",
  "/docs/troubleshooting",
  "/docs/upgrading-to-v1",
];

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
    legacyBrowsers: false,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = withPlugins([
  [
    optimizedImages,
    {
      mozjpeg: {
        quality: 100,
      },
      pngquant: {
        speed: 3,
        strip: true,
        verbose: true,
      },
      imagesPublicPath: "/_next/static/images/",
    },
  ],
  {
    basePath: "",
    assetPrefix: "",
  },
  withNextra(nextConfig),
]);
