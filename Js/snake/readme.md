- canvas
- JS异步是核心问题 
  事件，定时器，fetch/ajax
  代码的编写顺序和执行顺序不一样，导致代码的可读性下降
  loadAssets(); 1秒
  hideWelcome(); 在它之后
  js先 hideWelcome() 再 loadAssets() 执行完成
  js 单线程语言 JAVA 多线程

