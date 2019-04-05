#! /usr/bin/env node

//1)需要找到当前执行名的路径 拿到webpack.config.js

let path = require("path");

//config配置文件
let config = require(path.resolve("webpack.config.js"));

let Complier = require("../lib/Complier.js");
let complier = new Complier(config);
complier.hooks.entryOption.call();

//标识运行编译
complier.run();
