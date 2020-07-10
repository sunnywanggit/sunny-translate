#!/usr/bin/env node
//上面代码的含义是我们制定了在命令行中只能用node运行
import * as commander from 'commander';
import {translate} from './main';

const program = new commander.Command();

//声明工具版本
program.version('0.0.1')
    //命令行名称
    .name('fy')
    // 尖括号表示这个是必选的，中括号表示的就是可选的，这个是程序员界的约定
    .usage('<English>')
    //获取命令行传入的参数
    .arguments('<English>')
    .action(function (english) {
        translate(english);
    });
//解析命令行参数
program.parse(process.argv);



