# blog

## 常用命令
* 安装依赖
  ```
  npm install
  ```

* 启动项目
  ```
  npm run serve
  ```

* 项目打包
  ```
  npm run build
  ```

* 测试
  ```
  npm run test
  ```

* eslint 格式化文件
  ```
  npm run lint
  ```

## 自定义变量
* 查看 [Configuration Reference](https://cli.vuejs.org/config/).



## vscode 开发环境配置
* 插件
  * Vetur
  * Eslint
  * Chrome for debug (并配置 vue.config.js)
    ```
    module.exports = {
        configureWebpack: {
        devtool: 'source-map'
      }
    }
    ```

* launch.json
  ```json
  {
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "vuejs: chrome",
            "url": "http://localhost:8080",
            "webRoot": "${workspaceFolder}/src",
            "breakOnLoad": true,
            "sourceMapPathOverrides": {
                "webpack:///src/*": "${webRoot}/*"
            }
        },
    ]
  }
  ```

* settings.json
  ```json
  {
      "editor.fontSize": 16,
      "eslint.validate": [
          "javascript",
          "javascriptreact",
          {
              "language": "vue",
              "autoFix": true
          }
      ],
      "eslint.autoFixOnSave": true,
      "vetur.format.defaultFormatter.html": "prettier",
      "vetur.format.defaultFormatter.js": "vscode-typescript",
      "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
      "editor.formatOnSave": true,
      "editor.tabSize": 2,
  }
  ```
