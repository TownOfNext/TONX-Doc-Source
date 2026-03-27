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
  appearance: true,
  social: [
    { icon: 'github', link: 'https://github.com/TownOfNext/TownOfNext' },
  ],
  navbarSocialInclude: ['github'],
  outline: [2, 4],
  copyright: "CC-BY-NC-SA-4.0",
  prevPage: false,
  nextPage: false,
  createTime: false,
  transition: {
    appearance: "circle-clip"
  },
  footer: {
    copyright: "© 2023-2026 <a href='https://github.com/TownOfNext' target='_blank'>TownOfNext</a>"
  },
  locales: {
    '/': {
      navbar: zhNavbar,
      sidebar: {
        "/docs/": [
          "features",
          "getting-start",
          "advanced",
          "roles",
          "faq"
        ]
      },
      bulletin: {
        layout: 'top-right',
        contentType: 'markdown',
        lifetime: "session",
        title: "公告",
        content: "维护该项目会消耗我大量的空闲时间，也会使用一部分我的零钱用于更新检查服务等。因此很高兴您能为这个项目提供一些经济上的帮助！",
      },
      footer: {
        message: "本站点采用 <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/' target='_blank'>CC-BY-NC-SA-4.0</a> 进行许可。"
      }
    },
    '/en/': {
      navbar: enNavbar,
      sidebar: {
        "/docs/": [
          // Plume 主题 sidebar 对于多语言情况的处理有 bug
          // https://github.com/pengzhanbo/vuepress-theme-plume/issues/876
          "/en/docs/features",
          "/en/docs/getting-start",
          "/en/docs/advanced",
          "/en/docs/roles",
          "/en/docs/faq"
        ]
      },
      footer: {
        message: "This site is licensed under <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/' target='_blank'>CC-BY-NC-SA-4.0</a>."
      }
    }
  }
})
