# Active-Calendar-Chart

基于 Vue 仿 Github 贡献日历组件

<style >
.vp-doc .active-calendar-chart table {
  margin: 0;
}
.vp-doc .active-calendar-chart th {
  color: inherit;
  font-size: inherit;
  background-color: inherit;
}
.vp-doc .active-calendar-chart th,
.vp-doc .active-calendar-chart td {
  border: none;
  padding: 0;
  font-size: inherit;
}
.vp-doc .active-calendar-chart tr {
  /* background-color: transparent; */
}
</style>

<script setup lang="ts">
import { ref } from "vue";
</script>

:::demo

```vue
<template>
  <!-- 不设置date默认从当天往前推52周 -->
  <ActiveCalendarChart
    :value="{
      '2023-04-05': {
        color: '#005dd6',
        value: 5.19,
      },
      '2023-04-04': {
        color: '#1e80ff',
        value: 5.19,
      },
      '2023-04-03': {
        color: '#1e80ff',
        value: 5.2,
      },
    }"
  />
  <!-- 年 -->
  <ActiveCalendarChart
    :date="2022"
    :value="{
      '2023-04-05': {
        color: '#005dd6',
        value: 5.19,
      },
      '2023-04-04': {
        color: '#1e80ff',
        value: 5.19,
      },
      '2023-04-03': {
        color: '#1e80ff',
        value: 5.2,
      },
    }"
  />
  <!-- 日期范围 -->
  <ActiveCalendarChart
    :date="{ start: '2022-04-01', end: '2022-10-10' }"
    :value="{
      '2023-04-05': {
        color: '#005dd6',
        value: 5.19,
      },
      '2023-04-04': {
        color: '#1e80ff',
        value: 5.19,
      },
      '2023-04-03': {
        color: '#1e80ff',
        value: 5.2,
      },
    }"
  />
</template>
<script setup>
const data = ref({
  "2023-04-05": {
    color: "#005dd6",
    value: 5.19,
  },
  "2023-04-04": {
    color: "#1e80ff",
    value: 5.19,
  },
  "2023-04-03": {
    color: "#1e80ff",
    value: 5.2,
  },
});
</script>
```

:::

## 安装

`npm install active-calendar-chart`

## 使用

### 使用组件

#### 全局注册

```ts
import ActiveCalendarChart from "active-calendar-chart";
app.use(ActiveCalendarChart);
```

#### 局部注册

```html
<script setup>
  import { ref } from "vue";
  const data = ref({
    "2023-04-05": {
      color: "#005dd6",
      value: 5.19,
    },
    "2023-04-04": {
      color: "#1e80ff",
      value: 5.19,
    },
    "2023-04-03": {
      color: "#1e80ff",
      value: 5.2,
    },
    //   ...
  });
  console.log(data);
</script>
<template>
  <!-- 不设置date默认从当天往前推52周 -->
  <ActiveCalendarChart :value="data" />
  <!-- 年 -->
  <ActiveCalendarChart :date="2022" :value="data" />
  <!-- 日期范围 -->
  <ActiveCalendarChart :date="{ start: '2022-04-01', end: '2022-10-10' }" :value="data" />
</template>
```

### 获取生成表格的数据

你可以通过这个数据自定义组件，或者通过 canvas 进行渲染

```ts
// 生成数据
import { generateChartData } from "active-calendar-chart";
// 不设置date默认从当天往前推52周
console.log(generateChartData());
// 年
console.log(generateChartData(2023));
// 日期范围
console.log(generateChartData("2022-04-01", "2022-10-08"));
```

## 参数

| 参数          | 描述             | 类型                                              | 默认值                             | 是否必填 |
| ------------- | ---------------- | ------------------------------------------------- | ---------------------------------- | -------- |
| value         | 数据源           | `{[key:string]: { value: number; color: string}}` | `{}`                               | 否       |
| text-align    | 表格文本排列     | `left \| right \| center`                         | `left`                             | 否       |
| date          | 日期             | `number \| { start: string; end: string }`        | `undefined`                        | 否       |
| default-color | 设置默认格子颜色 | `string`                                          | `#ebedf0`                          | 否       |
| less          | Less 文本描述    | `string`                                          | `less`                             | 否       |
| more          | More 文本描述    | `string`                                          | `more`                             | 否       |
| colors        | 颜色范围         | `string[]`                                        | `[]`                               | 否       |
| grid          | 设置格子宽高     | `{ width: string; height: string }`               | `{ width: '10px', height: '10px'}` | 否       |
| description   | 表格描述         | `string`                                          | `undefined`                        | 否       |

## 插槽

| 名称       | 描述                       |
| ---------- | -------------------------- |
| default    | 自定义每个日期格子内容     |
| first-grid | 自定义第一个格子内容       |
| month      | 自定义每个月份格子内容     |
| week       | 自定义一周每一天的格子内容 |
