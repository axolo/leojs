说明
====

* 新构思

 * 流程
    * 从index.html入口
    * 加载app/app.js
    * 读取app/app.json
    * 加载前置脚本
    * 读取组件配置
    * 加载组件样式
    * 加载组件模版
    * 加载组件脚本
    * 加载后置脚本


  * 目录结构
    ```
    .
    |-- index.html
    `-- app
        |-- app.js
        |-- app.json
        `-- components
            `-- component
                |-- component.json
                |-- component.css
                |-- component.html
                `-- component.js
    ```

  * app.json
  ```js
    // 加载组件（根据路由选择）
    // 路由表
    // 环境变量
    // 前置脚本
    // 后置脚本
  ```

  * component.json
  ```js
  // TODO 本组件内部子组件获取：自动识别标签？读取配置文件？
  {
    "template": "component.html",     // 组件模版
    "styles": ["component.css"],      // 组件样式
    "scripts": ["component.js"],      // 组件脚本
    "partials": ["tags", "links"]     // 子组件
  }
  ```
  

* TODO
  * 统一global.js和app.js
  * 模块化设计，使用exports，兼容浏览器&lt;script&gt;及Node.js require
  * 设计加载预处理（pre load）及加载后处理（post load）


* 统一入口
  * index.html?page=page


* 入库脚本
  * assets/js/app.js
  * 处理入口参数并动态加载页面组件


* 页面组件
  * pages/page/page.js
  * pages/page/page.css
  * pages/page/page.html


* 局部组件
  * partails


> 方跃明
