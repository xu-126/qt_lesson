import program from 'commander'; //安装 命令行的处理
import install from './install'; // es6 的模块化

program.command('install').description('install template').alias('i') //短链接
.action(() => {
  install();
})

console.log('program');
program.parse(process.argv);
