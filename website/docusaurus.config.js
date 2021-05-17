/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'TieJS',
  tagline: 'A Node.js Framework based on Koa and TypeScript',
  url: 'https://tiejs.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tiejs',
  projectName: 'tiejs.github.io',
  themeConfig: {
    sidebarCollapsible: false,
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      title: 'TieJS',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/intro/quick-start',
          activeBasePath: 'docs',
          position: 'left',
          label: '文档',
        },
        {
          href: 'https://www.github.com/tiejs/tie',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Quick start',
              to: 'docs/intro/quick-start',
            },
            {
              label: 'About',
              to: 'docs/intro/about',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/tiejs',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/forsigner/tie',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} forsigner`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
          // remarkPlugins: [require('./src/plugins/remark-npm2yarn')],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
