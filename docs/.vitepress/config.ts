import { defineConfig } from "vitepress";
import demoBlockPlugin from "vitepress-theme-demoblock";
export default defineConfig({
  title: "yangguang",
  themeConfig: {
    siteTitle: "Business Components",
    // logo: "/logo.awebp",
    nav: [
      { text: "组件", link: "/components/" },
      { text: "Github", link: "https://github.com/codeListener/" },
    ],
    sidebar: {
      "/": [
        {
          text: "快速开始",
          link: "/",
        },
        {
          text: "业务组件",
          items: [{ text: "活跃度组件", link: "/components/active-calendar-chart" }],
          collapsed: true,
        },
      ],
    },
  },
  markdown: {
    config: (md) => {
      // 添加DemoBlock插槽
      md.use(demoBlockPlugin);
    },
  },
});
