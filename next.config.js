const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_staticImage: true,
});

const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

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
