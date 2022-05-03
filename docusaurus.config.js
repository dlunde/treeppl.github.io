// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TreePPL',
  tagline: 'A Probabilistic Programming Language for Statistical Phylogenetics',
  url: 'https://dlunde.github.io/',
  baseUrl: '/treeppl.github.io/',
  projectName: 'treeppl.github.io',
  organizationName: 'dlunde',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  // TODO We should eventually fix broken links and throw if any are found
  // onBrokenLinks: 'throw',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      navbar: {
        title: 'TreePPL',
        // TODO Add TreePPL logo
        // logo: {
        //   alt: 'TreePPL Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'doc',
            docId: 'treeppl',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/treeppl/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'TreePPL',
                to: '/docs/treeppl',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/treeppl/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fredrik Ronquist`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
