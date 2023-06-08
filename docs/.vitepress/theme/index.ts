import { Theme } from "vitepress";
import ActiveCalendarChart from "active-calendar-chart";
import DefautlTheme from "vitepress/theme";
import Button from "../../../src/components/index";
import "uno.css";

// 插件的组件，主要是demo组件
import "vitepress-theme-demoblock/dist/theme/styles/index.css";
import Demo from "vitepress-theme-demoblock/dist/client/components/Demo.vue";
import DemoBlock from "vitepress-theme-demoblock/dist/client/components/DemoBlock.vue";
export default {
  ...DefautlTheme,
  enhanceApp({ app }) {
    app.component("Demo", Demo);
    app.component("DemoBlock", DemoBlock);
    app.use(ActiveCalendarChart.install);
    app.use(Button);
  },
} as Theme;
