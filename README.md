> 因百度翻译接口需按量付费，所以目前翻译接口已被我自行关闭

## sunny-translate 项目介绍

sunny-translate 是一个基于 Commander.js 和 Http Request 的命令行翻译工具。

## 运行方式

```js
//从 npm 下载
npm i -g sunny-translate
//执行翻译
fy hello
```


## 本地运行代码

```js
ts-node-dev src/cli.ts hello
```

## 部分依赖介绍

**Commander.js**

Commander.js 是 Node.js 命令行界面的完整解决方案，使用方法见：https://segmentfault.com/a/1190000019350684

**md5**

使用 md5 做哈希处理，使用方法详见：https://www.npmjs.com/package/md5

- ts-node-dev

It restarts target node process when any of required files changes (as standard node-dev) but shares Typescript compilation process between restarts.使用方法详见：https://www.npmjs.com/package/ts-node-dev

**翻译接口**

百度翻译开放平台：https://api.fanyi.baidu.com/


## 如何将项目发布至 npm
1.配置 package.json
```js
//指定运行方式
"bin": {
    "fy": "dist/cli.js"
  },
//添加需要上传至 npm 的文件
"files": [
    "dist/**/*.js"
  ],
```

2.连接 npm 上传代码

```js
npm add user

//提交发布
npm publish
```


