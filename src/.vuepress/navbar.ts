/**
 * @see https://theme-plume.vuejs.press/config/navigation/
 *
 * Navbar 配置文件。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { icon: "fluent:info-24-regular", text: "模组介绍", link: "/docs/introduction" },
  { icon: "fluent:arrow-download-24-regular", text: "下载安装", link: "/docs/getting-started" },
  { icon: "fluent:book-24-regular", text: "进阶教程", link: "/docs/advanced" },
  { icon: "fluent:options-24-regular", text: "游戏模式", link: "/docs/game-modes" },
  { icon: "fluent:text-bullet-list-square-24-regular", text: "职业列表", link: "/docs/roles" },
  { icon: "fluent:trophy-24-regular", text: "成就", link: "/docs/achievements" },
  { icon: "fluent:question-circle-24-regular", text: "常见问题", link: "/docs/faq" },
])

export const enNavbar = defineNavbarConfig([
  { icon: "fluent:info-24-regular", text: "About", link: "/en/docs/introduction" },
  { icon: "fluent:arrow-download-24-regular", text: "Install", link: "/en/docs/getting-started" },
  { icon: "fluent:book-24-regular", text: "Advanced", link: "/en/docs/advanced" },
  { icon: "fluent:options-24-regular", text: "Modes", link: "/en/docs/game-modes" },
  { icon: "fluent:text-bullet-list-square-24-regular", text: "Roles", link: "/en/docs/roles" },
  { icon: "fluent:trophy-24-regular", text: "Achievements", link: "/en/docs/achievements" },
  { icon: "fluent:question-circle-24-regular", text: "FAQ", link: "/en/docs/faq" },
])
