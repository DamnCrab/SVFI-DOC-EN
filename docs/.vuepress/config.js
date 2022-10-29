const baiduCode = require('./config/baiduCode.js'); // Baidu statistics hm code
const htmlModules = require('./config/htmlModules.js');


module.exports = {

  theme: 'vdoing', // use dependency package theme
  // theme: require.resolve('../../vdoing'), // Use a local theme (download the vdoing theme file to the local first: https://github.com/xugaoyi/vuepress-theme-vdoing)

  title: "SVFI Doc",
  description: 'SVFI English Documentation',
  base: '', // Default '/'. If you want to deploy your website to e.g. https://foo.github.io/bar/ then base should be set to "/bar/", (otherwise the page will lose styles etc.)
  head: [ // The tag injected into the page <head>, format [tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/img/svfi.ico' }], //favicons, resources are placed in the public folder
    ['meta', { name: 'keywords', content: 'vuepress,theme,blog,vdoing' }],
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // Mobile browser theme color

    ['meta', { name: 'wwads-cn-verify', content: '6c4b761a28b734fe93831e3fb400ce87' }], // Advertising related, you can remove it
    ['script', { src: 'https://cdn.wwads.cn/js/makemoney.js', type: 'text/javascript' }], // Advertising related, you can remove it

    ['meta', { name: 'referrer', content: 'no-referrer' }],

  ],

  // theme configuration
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Quickstart', link: '/pages/dc46b8', items: [
          { text: 'What is VFI', link: '/pages/88ed7f/' },
          { text: 'What is SR', link: '/pages/681961/' },
          { text: 'Quick Start for SVFI', link: '/pages/0e988c/' },
          {
            text: 'Related articles', link: '/pages/8cc1b5', items: [
              { text: 'What is encoding, encoder and pixel format', link: '/pages/76d9d4/' },
              { text: 'What is rendering', link: '/pages/7b7d11/' },
              { text: 'What is HDR', link: '/pages/89244b/' },
            ]
          }
        ]
      },
      {
        text: 'Guide', link: '/pages/f8b952/', items: [
          { text: 'Advanced Settings Explained', link: '/pages/052617/'},
          { text: 'Using Commandine tools of SVFI', link: '/pages/ceb849/'},
        ]
      },
      { text: 'FAQ', link: '/pages/9cc27d/', items: [
        { text: 'Tips and Presets', link: '/pages/18309a/'},
      ] },
      { text: 'support', link: '/pages/1b12ed/' },
    ],
    sidebarDepth: 2, // sidebar display depth, default 1, maximum 2 (displayed to h3 title)
    logo: '/img/svfi.ico', // navigation bar logo
    repo: 'Justin62628/Squirrel-RIFE', // Generate a Github link on the right side of the navigation bar
    searchMaxSuggestions: 10, // maximum number of search results displayed
    lastUpdated: 'Last updated', // Update time, and prefix text string | boolean (value is git commit time)

    // docsDir: 'docs', // edited folder
    // editLinks: true, // edit links
    // editLinkText: 'Edit',

    // The following configuration is the changed and new configuration of Vdoing theme
    sidebar: { mode: 'structuring', collapsable: false }, // sidebar 'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | Customization Tips: Contents page data depends on structure Customized sidebar data, if you don't set it to 'structuring', you will not be able to use the table of contents page

    // sidebarOpen: false, // Whether to open the sidebar in the initial state, the default is true
    updateBar: { // Recently updated bar
      showToArticle: false, // show to the bottom of the article page, default true
      // moreArticle: '/archives' // "More Articles" jump page, default '/archives'
    },
    // titleBadge: false, // Whether the icon before the title of the article is displayed, the default is true
    // titleBadgeIcons: [ // The address of the icon before the title of the article, the default theme built-in icon
    // 'Icon address 1',
    // 'Icon address 2'
    // ],

    pageStyle: 'line', // page style, optional value: 'card' card | 'line' line (only valid when bodyBgImg is not set), default 'card'. Description: When the card is displayed, the background is gray to set off the card style. When the line is used, the background is displayed in solid color, and some modules have line borders.

    // contentBgStyle: 1,

    category: false, // Whether to open the category function, the default is true. If it is opened, it will do the following: 1. The automatically generated frontmatter contains the category field 2. The page displays information and modules related to the category 3. The category page (in the @pages folder) is automatically generated. If closed, vice versa.
    tag: false, // Whether to open the tag function, the default is true. If it is opened, it will do the following: 1. The automatically generated frontmatter contains the tag field 2. The page displays information and modules related to the tag 3. The tag page is automatically generated (in the @pages folder). If closed, vice versa.
    // archive: false, // Whether to open the archive function, the default is true. If open, it will do the following: 1. Automatically generate archived pages (in the @pages folder). If closed, vice versa.

    author: { // The default author information of the article, which can be configured separately in the md file String | {name: String, href: String}
      name: 'Justin62628', // required
      href: 'https://github.com/Justin62628' // optional
    },
    social: { // social icon, displayed in blogger info bar and footer bar
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // optional, the online css file address of Ali icon library, you can freely add icons that are not in the theme
      icons: [
        {
          iconClass: 'icon-youjian',
          title: 'Send Email',
          link: 'https://github.com/Justin62628'
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/Justin62628/Squirrel-RIFE'
        },
      ]
    },
    footer: { // footer information
      createYear: 2022, // Blog creation year
      copyrightInfo: 'Justin62628 | MIT License', // Blog copyright information, support a tag
    },
    htmlModules,
  },

	// 插件
	plugins: [
		[
		      'vuepress-plugin-container',
		      {
		        type: 'tip',
		        defaultTitle: {
		          '/': 'TIP',
		        },
		      },
		],
		[
		      'vuepress-plugin-container',
			  {
			    type: 'warning',
			    defaultTitle: {
			      '/': 'WARNING',
			    },
			  },
		],
		[
		      'vuepress-plugin-container',
			  {
			    type: 'danger',
			    defaultTitle: {
			      '/': 'DANGER',
			    },
			  },
		],
		[
		      'vuepress-plugin-container',
			  {
			    type: 'note',
			    defaultTitle: {
			      '/': 'NOTE',
			    },
			  },
		],
		// [require('./plugins/love-me'), { // 鼠标点击爱心特效
		//   color: '#11a8cd', // 爱心颜色，默认随机色
		//   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
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
		['fulltext-search'], // 全文搜索

    // ['thirdparty-search', { // A search box where third-party search links can be added (the parameters of the original official search box are still available)
    // thirdparty: [ // optional, default []
    // {
    // title: 'Search in GitHub',
    // frontUrl: 'https://github.com/search?q=', // search the front part of the link
    // behindUrl: '' // search the back part of the link, optional, default ''
    // },
    // {
    // title: 'Search in npm',
    // frontUrl: 'https://www.npmjs.com/search?q=',
    // },
    // {
    // title: 'Search in Bing',
    // frontUrl: 'https://cn.bing.com/search?q='
    // }
    // ]
    // }],


    ['one-click-copy', { // code block copy button
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: 'Copy successfully', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    ['demo-block', { // demo demo module https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // js dependencies in online examples (jsfiddle, codepen)
        // cssLib: ['http://xxx'], // css dependencies in online example
        // vue: 'https://fastly.jsdelivr.net/npm/vue/dist/vue.min.js', // vue dependencies in the online example
        jsfiddle: false, // whether to show jsfiddle link
        codepen: true, // whether to show the codepen link
        horizontal: false // whether to display as a horizontal style
      }
    }],
    [
      'vuepress-plugin-zooming', // zoom in on the image
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        },
      },
    ],
    [
      '@vuepress/last-updated', // "last-updated" time format
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
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // Extract headers to the sidebar level, default ['h2', 'h3']
  },

  // listen for file changes and rebuild
  extraWatchFiles: [
    '.vuepress/config.js',
    '.vuepress/config/htmlModules.js',
  ]
}