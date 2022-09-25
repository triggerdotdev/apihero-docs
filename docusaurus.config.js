// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "API Hero Docs",
  tagline: "Connect to APIs in seconds and scale without servers",
  url: "https://docs.apihero.run",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "API Hero", // Usually your GitHub org/user name.
  projectName: "API Hero", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/apihero-run/apihero-docs",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: ["posthog-docusaurus"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "API Hero",
        logo: {
          alt: "API Hero",
          src: "img/logo.svg",
          href: "https://app.apihero.run",
        },
        items: [
          {
            href: "https://app.apihero.run",
            label: "app.apihero.run",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/gzn9G8Sv",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/tryapihero",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/apihero-run/api-hero",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} API Hero. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      posthog: {
        apiKey: "phc_sbTCuwyQ0vh4ICohbirIFhcKMWLM58kFlkEPy0umZhA",
        appUrl: "https://app.posthog.com",
        enableInDevelopment: true,
      },
    }),
};

module.exports = config;
