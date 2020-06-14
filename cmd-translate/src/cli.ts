import * as commander from "commander";
import {translate} from "./main";
const program = new commander.Command();


program.version('0.0.1')
    .name('fy')
    // 尖括号表示这个是必选的
    .usage('<English>')
    .arguments('<English>')
    .action(function (english) {
        translate(english)
    })

program.parse(process.argv)



