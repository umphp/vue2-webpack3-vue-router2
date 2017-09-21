## HOW TO USE

拉取代码

    git init ;
    git remote add origin http://x-git.code.oa.com/git/gad/gad-mobile.git
    git pull origin master;

安装相应的工具
> [yarn](https://yarnpkg.com/zh-Hans/) 安装 , 不安装也可以进行下一步

安装项目依赖

    npm install webpack webpack-dev-server -g 或者 yarn global add webpack webpack-dev-server

    npm install 或者 yarn install

运行任务

    开发环境: npm run dev
    构建任务: npm run build

## 项目规范说明
待补充...: 

## 项目目录说明

```
.
├── build/                                        // 上线项目文件，放在服务器即可正常访问
│── config/                                       // 基本配置
│   ├── default.js                                // 默认配置
│   ├── base.js                                   // 基础配置
│   ├── dev.js                                    // 开发环境配置
│   └── dist.js                                   // 构建任务配置
├── app/                                          // 源码目录
│   ├── components/                               // 组件
│   │     ├── common/
│   │     ├── footer/
│   │     └── header/
│   ├── page/                                     // 页面
│   ├── plugins/                                  // 引用的插件
│   ├── utils/                                    // 编写的公共库
│   ├── sources/                                  // 资源文件 ,image,font,video,audio
│   ├── service/                                  // 数据交互统一调配
│   ├── stores/                                   // vuex的状态管理
│   ├── style/                                    // 样式目录
│   ├── App.vue                                   // 页面入口文件
│   └── main.js                                   // 程序入口文件，加载各种公共组件
├── favicon.ico                                   // 图标
├── index.html                                    // 入口html文件
├── router.js                                     // 路由
.

56 directories, 203 files
```

## 项目插件说明

        "vue": "^2.4.2",
        "vue-router": "^2.7.0"
        "axios": "^0.16.2"

> [axios](https://github.com/mzabriskie/axios) 介绍

扩展到Vue

```js
import axios from 'axios';
Vue.prototype.$http = axios;
````


