# uniapp002

## 安装 sass

yarn add sass-loader@7.1.0 node-sass@4 --dev -----sass-loader 版本不宜太高，否则运行会报错

## h5 打包注意事项

1、若打包部署后，页面 404 或者静态文件找不到，则在 manifest.json 文件中的 h5 部分，加上
"router": {
"base": "/h5" -----"/h5"就是服务器的访问目录
},

## 提交代码时报错解决方法

https://zhuanlan.zhihu.com/p/414028184

若报错：failed unable to access ‘***.git/‘:OpenSSL SSL_read: Connection was reset, errno 10054
则在终端输入命令行：git config --global http.sslBackend "openssl"即可

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```


