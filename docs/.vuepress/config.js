const baiduCode = require('./config/baiduCode.js'); // Baidu statistics hm code
const htmlModules = require('./config/htmlModules.js');


module.exports = {

  theme: 'vdoing', // use dependency package theme
  // theme: require.resolve('../../vdoing'), // Use a local theme (download the vdoing theme file to the local first: https://github.com/xugaoyi/vuepress-theme-vdoing)

  title: "SVFI Doc",
  description: 'SVFI User Documentation',
  base: '', // Default '/'. If you want to deploy your website to e.g. https://foo.github.io/bar/, then base should be set to "/bar/", (otherwise the page will lose style files, etc.)
  head: [ // Tags injected into the page <head>, format [tagName, { attrName: attrValue }, innerHTML?]
    ['link', {
      rel: 'icon',
      href: '/img/svfi.ico'
    }], //favicons, resources are placed in the public folder
    ['meta', {
      name: 'keywords',
      content: 'vuepress,theme,blog,vdoing'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#11a8cd'
    }], // mobile browser theme color

    ['meta', {
      name: 'wwads-cn-verify',
      content: '6c4b761a28b734fe93831e3fb400ce87'
    }], // Ad related, you can remove
    ['script', {
      src: 'https://cdn.wwads.cn/js/makemoney.js',
      type: 'text/javascript'
    }], // Ad related, you can remove

    ['meta', {
      name: 'referrer',
      content: 'no-referrer'
    }],

  ],

  // theme configuration
  themeConfig: {
    nav: [{
      text: 'Homepage',
      link: '/'
    },
    {
      text: 'Quick Start',
      link: '/pages/dc46b8',
      items: [
        {
          text: 'What is framerate, resolution and bitrate',
          link: '/pages/dc46b8/'
        },
        {
          text: 'What is VFI',
          link: '/pages/88ed7f/'
        },
        {
          text: 'What is Super Resolution',
          link: '/pages/681961/'
        },
        {
          text: 'Quick start for SVFI',
          link: '/pages/0e988c/'
        }
      ]
    },
    {
      text: 'Related Articles',
      link: '/pages/8cc1b5',
      items: [
        {
          text: 'Image and quality',
          link: '/pages/8cc1b5/'
        },
        {
          text: 'What is encoding, encoder and container',
          link: '/pages/76d9d4/'
        },
        {
          text: 'What is encoding',
          link: '/pages/7b7d11/'
        },
        {
          text: 'What is HDR',
          link: '/pages/89244b/'
        },
      ]
    },
    {
      text: 'Software User Guide',
      link: '/pages/f8b952/',
      items: [
        {
          text: 'Quick Guide',
          link: '/pages/f8b952/'
        },
        {
          text: 'Advanced Settings',
          link: '/pages/052617/'
        },
        {
          text: 'Command Line Interface',
          link: '/pages/ceb849/'
        },
      ]
    },
    {
      text: 'FAQs and presets',
      link: '/pages/9cc27d/',
      items: [
        {
          text: 'FAQ',
          link: '/pages/9cc27d/',
        },
        {
          text: 'Tips and presets',
          link: '/pages/18309a/'
        },
      ]
    },
    {
      text: 'Support',
      link: '/pages/1b12ed/'
    },
    ],
    sidebarDepth: 2, // Sidebar display depth, default 1, maximum 2 (display to h3 title)
    logo: '/img/svfi.ico', // navigation bar logo
    repo: 'Justin62628/Squirrel-RIFE', // Generate a Github link on the right side of the navigation bar
    searchMaxSuggestions: 10, // maximum number of search results
    lastUpdated: 'Last Update', // updated time, and prefix text string | boolean (value is git submission time)

    // docsDir: 'docs', // edited folder
    // editLinks: true, // edit links
    // editLinkText: 'edit',

    // The following configurations are changed and newly added configurations of the Vdoing theme
    sidebar: {
      mode: 'structuring',
      collapsable: false
    }, // Sidebar 'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | Custom Tips: Catalog page data depends on structured sidebar data, if you do not set to 'structuring', will not be able to use the catalog page

    // sidebarOpen: false, // Whether to open the sidebar in the initial state, the default is true
    updateBar: { // recently updated bar
      showToArticle: false, // display to the bottom of the article page, default true
      // moreArticle: '/archives' // "More Articles" jump page, default '/archives'
    },
    // titleBadge: false, // Whether to display the icon before the title of the article, the default is true
    // titleBadgeIcons: [ // The address of the icon before the title of the article, the built-in icon of the default theme
    // 'Icon address 1',
    // 'icon address 2'
    // ],

    pageStyle: 'line', // page style, optional value: 'card' card | 'line' line (only effective when bodyBgImg is not set), default 'card'. Explanation: The background displays gray in card mode to set off the card style, and the background displays solid color in line mode, and some modules have line borders

    // contentBgStyle: 1,

    category: false, // Whether to enable the classification function, the default is true. If opened, it will do the following: 1. The automatically generated frontmatter contains classification fields 2. The information and modules related to the classification are displayed on the page 3. The classification page is automatically generated (in the @pages folder). If closed, vice versa.
    tag: false, // Whether to enable the tag function, the default is true. If opened, it will do the following: 1. The automatically generated frontmatter contains the label field 2. The information and modules related to the label are displayed on the page 3. The label page (in the @pages folder) is automatically generated. If closed, vice versa.
    // archive: false, // Whether to enable the archive function, the default is true. If opened, it will do the following: 1. Automatically generate archive pages (in the @pages folder). If closed, vice versa.

    author: { // The default author information of the article, which can be configured separately in the md file String | {name: String, href: String}
      name: 'Justin62628', // required
      href: 'https://github.com/Justin62628' // optional
    },
    social: { // social icons, displayed in the blogger information bar and footer bar
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // Optional, Ali icon library online css file address, you can freely add icons that do not have a theme
      icons: [{
        iconClass: 'icon-youjian',
        title: 'Send Email',
        link: '2410377391@qq.com'
      },
      {
        iconClass: 'icon-github',
        title: 'GitHub',
        link: 'https://github.com/Justin62628/Squirrel-RIFE'
      },
      ]
    },
    footer: { // footer information
      createYear: 2022, // blog creation year
      copyrightInfo: 'Justin62628 | MIT License', // blog copyright information, support a tag
    },
    htmlModules,
  },

  // plugin
  plugins: [
    // [require('./plugins/love-me'), { // mouse click love effect
    // color: '#11a8cd', // Heart color, default random color
    // excludeClassName: 'theme-vdoing-content' // The class of the element to be excluded, the default is empty''
    // }],
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
    ['fulltext-search'], // full text search

    // ['thirdparty-search', { // A search box that can add third-party search links (the parameters of the original official search box are still available)
    // thirdparty: [ // optional, default []
    // {
    // title: 'Search in GitHub',
    // frontUrl: 'https://github.com/search?q=', // the front part of the search link
    // behindUrl: '' // The back part of the search link, optional, default ''
    // },
    // {
    // title: 'Search in npm',
    // frontUrl: 'https://www.npmjs.com/ssearch?q=',
    // },
    // {
    // title: 'Search in Bing',
    // frontUrl: 'https://cn.bing.com/search?q='
    // }
    // ]
    // }],

    [
      'vuepress-plugin-baidu-tongji', // Baidu statistics
      {
        // hm: baiduCode || '01293bffa6c3962016c08ba685c79d78'
      }
    ],

    ['one-click-copy', { // code block copy button
      copySelector: ['div[class*="language-"] pre',
        'div[class*="aside-code"] aside'], // String or Array
      copyMessage: 'Copy successfully', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    ['demo-block', { // demo demo module https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // js dependencies in online examples (jsfiddle, codepen)
        // cssLib: ['http://xxx'], // css dependencies in online examples
        // vue: 'https://fastly.jsdelivr.net/npm/vue/dist/vue.min.js', // vue dependencies in online examples
        jsfiddle: false, // Whether to display the jsfiddle link
        codepen: true, // Whether to display the codepen link
        horizontal: false // Whether to display in horizontal style
      }
    }],
    [
      'vuepress-plugin-zooming', // Zoom in on the image
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        },
      },
    ],
    [
      '@vuepress/last-updated', // "last updated" time format
      {
        transformer: (timestamp, lang) => {
          const dayjs = require('dayjs') // https://day.js.org/
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      }
    ]
  ],

  markdown: {
    // lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // extract headers to the level of the sidebar, default ['h2', 'h3']
  },

  // Listen for file changes and rebuild
  extraWatchFiles: [
    '.vuepress/config.js',
    '.vuepress/config/htmlModules.js',
  ]
}