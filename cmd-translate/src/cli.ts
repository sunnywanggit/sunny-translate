import * as commander from "commander";
const program = new commander.Command();


program.version('0.0.1')
    .name('fy')
    // 尖括号表示这个是必选的
    .usage('<english>')

program.parse(process.argv)



