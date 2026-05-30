/**
 * @see https://theme-plume.vuejs.press/config/navigation/
 *
 * Navbar 配置文件。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { icon: "fluent:info-24-regular", text: "模组介绍", link: "/zh/docs/introduction" },
  { icon: "fluent:arrow-download-24-regular", text: "下载安装", link: "/zh/docs/getting-started" },
  { icon: "fluent:book-24-regular", text: "进阶教程", link: "/zh/docs/advanced" },
  { icon: "fluent:options-24-regular", text: "游戏模式", link: "/zh/docs/game-modes" },
  { icon: "fluent:text-bullet-list-square-24-regular", text: "职业列表", link: "/zh/docs/roles" },
  { icon: "fluent:question-circle-24-regular", text: "常见问题", link: "/zh/docs/faq" },
])

export const enNavbar = defineNavbarConfig([
  { icon: "fluent:info-24-regular", text: "About", link: "/docs/introduction" },
  { icon: "fluent:arrow-download-24-regular", text: "Install", link: "/docs/getting-started" },
  { icon: "fluent:book-24-regular", text: "Advanced", link: "/docs/advanced" },
  { icon: "fluent:options-24-regular", text: "Modes", link: "/docs/game-modes" },
  { icon: "fluent:text-bullet-list-square-24-regular", text: "Roles", link: "/docs/roles" },
  { icon: "fluent:question-circle-24-regular", text: "FAQ", link: "/docs/faq" },
])