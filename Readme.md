# Town Of Next Docs

## 快速开始

确保你的开发环境已安装 [Node.js](https://nodejs.org/) 与 [npm](https://www.npmjs.com/)。\
主题要求您的 Node.js 版本 >= 20.19.0 && < 21.0.0 || >= 22.0.0，您的 npm 版本 >= 8。通常您应当使用 22+ 的 LTS 版本 Node.js，最新稳定版本的 npm。

安装依赖：

```sh
npm ci # 如果是开发环境则更建议使用 npm i
```

使用：

```sh
# 启动开发服务
npm run docs:dev
# 构建生产包
npm run docs:build
# 本地预览生产服务
npm run docs:preview
# 更新 vuepress 和主题
npx vp-update # 或 npm run vp-update
```

## 文档

- [VuePress](https://vuepress.vuejs.org/)
- [VuePress Plume Theme](https://theme-plume.vuejs.press/)