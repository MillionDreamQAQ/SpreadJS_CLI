# SpreadJS CLI
这是一个基于 SpreadJS 纯前端表格控件进行快速开发的原型脚手架工具，提供：
- 快速建立基于 SpreadJS 的在线类 Excel 应用初始 Demo
- 通过模板选择 Vue2/Vue3/React 多种原型版本
- 可选择是否在原型中创建带有表格编辑器插件 (Designer) 的 Demo

## 支持的 Node 版本
- Node 版本应大于 14.20.0，推荐使用 16.xx.x 或 18.xx.x 版本

## 使用步骤
### 安装 SpreadJS CLI
注：如果使用 npx 方式运行，可跳过此步骤
```JavaScript
// 如果想直接运行 spreadjs-cli 命令，需要全局安装，或者使用 npx 方式运行
npm  install -g spreadjs-cli
```
### 通过 spreadjs-cli 创建 demo
```JavaScript
spreadjs-cli create my-first-demo
```
或
```JavaScript
npx spreadjs-cli create my-first-demo
```
### 选择模板原型
```shell
✔ Loading list...
? Please choose which template for your first SpreadJS demo? (Use arrow keys)
> PureJS-with-Designer
  Vue3
  Vue3-with-Designer
  Vue2
  Vue2-with-Designer
  React
  React-with-Designer
```
### 进入目录，并运行
```JavaScript
cd my-first-demo
npm run start
```

## 有关 SpreadJS 前端表格控件
[纯前端电子表格控件，可嵌入您系统的在线 Excel](https://www.grapecity.com.cn/developer/spreadjs)
葡萄城 SpreadJS 是最完整的企业类 Excel 应用前端解决方案，可快速提供类似 Microsoft® Excel 的[电子表格体验](https://demo.grapecity.com.cn/SpreadJS/WebDesigner/content/index.html)。 SpreadJS 还提供对 [Vue](https://www.grapecity.com.cn/developer/spreadjs/vue)、[React](https://www.grapecity.com.cn/developer/spreadjs/react)、[Angular](https://www.grapecity.com.cn/developer/spreadjs/angular) 和 TypeScript 的全面支持。

这个企业级 JavaScript 电子表格控件支持许多流行的功能，例如强大的[公式引擎（500 多个函数）](https://demo.grapecity.com.cn/spreadjs/SpreadJSTutorial/features/calculation/basic-functions/purejs)、可选的[数据透视表](https://demo.grapecity.com.cn/spreadjs/SpreadJSTutorial/features/pivot-table/pivot-panel/overview/purejs)、[图表](https://demo.grapecity.com.cn/spreadjs/SpreadJSTutorial/features/charts/basic-chart/purejs)、切片器、迷你图、[条件格式](https://demo.grapecity.com.cn/spreadjs/SpreadJSTutorial/features/cells/conditional-format/basic-conditional-format/purejs)、[表格](https://demo.grapecity.com.cn/spreadjs/SpreadJSTutorial/features/tables/basic-table/purejs)、国际本地化、[打印](https://demo.grapecity.com.cn/spreadjs/SpreadJSTutorial/features/print/basic-print/purejs)、排序、过滤、拖填、分组 、撤消/重做、[数据验证](https://demo.grapecity.com.cn/spreadjs/SpreadJSTutorial/features/cells/data-validation/basic-data-validator/purejs)、[输入控件](https://demo.grapecity.com.cn/spreadjs/SpreadJSTutorial/features/cells/cell-types/basic/purejs)、[本地 Excel 输入和输出](https://demo.grapecity.com.cn/spreadjs/SpreadJSTutorial/features/workbook/excel-import-export/purejs)等。
![SpreadJS](https://cdn.grapecity.com.cn/spreadjs/resources/web-designer/all.png)

想快速了解产品，请查看我们的 **[在线产品示例](https://www.grapecity.com.cn/developer/spreadjs/demo)**

**[欢迎下载 SpreadJS，立即试用](https://www.grapecity.com.cn/developer/spreadjs/download)**

## NPM 方式安装  
```JavaScript
npm  install @grapecity/spread-sheets
```

## 产品文档
- **[产品文档](https://demo.grapecity.com.cn/spreadjs/help/docs/overview)**
- **[API 参考](https://demo.grapecity.com.cn/spreadjs/help/api/modules/GC.Data)**

## 获取更多帮助
-  **[SpreadJS 产品主页](https://www.grapecity.com.cn/developer/spreadjs)**: 了解更多产品核心功能及应用场景
-  **[技术支持论坛](https://gcdn.grapecity.com.cn/showforum-230-1.html)**: 免费技术支持论坛，对产品使用过程中的任何疑问和问题，都能在这里找到答案
