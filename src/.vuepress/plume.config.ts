/**
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改不会重启 vuepress 服务，而是通过热更新的方式生效
 * 但同时部分配置项不支持热更新，请查看文档说明
 * 对于不支持热更新的配置项，请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会覆盖 `.vuepress/config.ts` 文件中的配置
 */

import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar } from './navbar'

/**
 * @see https://theme-plume.vuejs.press/config/theme/
 */
export default defineThemeConfig({
  logo: '/logo.png',
  social: [
    { icon: 'github', link: 'https://github.com/TownOfNext/TownOfNext' },
  ],
  navbarSocialInclude: ['github'],
  sidebarScrollbar: false,
  outline: [2, 4],
  transition: {
    appearance: "circle-clip"
  },
  footer: {
    copyright: "© 2023-2026 <a href='https://github.com/TownOfNext' target='_blank'>TownOfNext</a>"
  },
  editLinkPattern: ":repo/blob/:branch/:path",
  copyright: false,
  prevPage: false,
  nextPage: false,
  createTime: false,
  locales: {
    '/': {
      navbar: zhNavbar,
      sidebar: {
        "/docs/": [
          "introduction",
          "getting-started",
          "advanced",
          "roles",
          "faq"
        ]
      },
      footer: {
        message: "本站点采用 <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/' target='_blank'>CC-BY-NC-SA-4.0</a> 进行许可。"
      },
      editLinkText: "在 GitHub 上查看此页"
    },
    '/en/': {
      navbar: enNavbar,
      sidebar: {
        "/docs/": [
          // Plume 主题 sidebar 对于多语言情况的处理有 bug
          // https://github.com/pengzhanbo/vuepress-theme-plume/issues/876
          "/en/docs/introduction",
          "/en/docs/getting-started",
          "/en/docs/advanced",
          "/en/docs/roles",
          "/en/docs/faq"
        ]
      },
      footer: {
        message: "This site is licensed under <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/' target='_blank'>CC-BY-NC-SA-4.0</a>."
      },
      editLinkText: "View this page on GitHub"
    }
  }
})
