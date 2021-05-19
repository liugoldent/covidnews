/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Covid-19 News',
  tagline: '各縣市確診足跡與每日新增確診人數',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'covid-19 news',
      logo: {
        alt: 'My Site Logo',
        src: 'img/covid19.jpg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: '每日確診者足跡',
        },
        {to: '/blog', label: '最新消息', position: 'left'},
        {
          href: 'https://www.google.com/maps/d/u/0/viewer?hl=zh-TW&ll=24.703339047947587%2C121.41987825364788&z=10&fbclid=IwAR2-5R3ge14IYOGUpVUY2iKVSJUsKFDi8n36bL3p056OG-2oFpydFG_53wk&mid=10TfvVgBJ__iAkKMI9DObANFbfCrFV6nk',
          label: '足跡地圖',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '政府官方連結',
          items: [
            {
              label: '衛福部',
              to: 'https://www.cdc.gov.tw/',
            },
          ],
        },
        // {
        //   title: '聯絡資訊',
        //   items: [
        //     {
        //       label: 'Gmail',
        //       href: 'liugoldent@gmail.com',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Guan Ting Liu`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
