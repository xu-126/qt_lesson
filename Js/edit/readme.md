- 如果我没有好多信息要从用户收集
  表单不要太长  易用
  移动 分页
  PC端 多个表单
- JS在面向对象中 this指向谁呢？
  EditInPlace 类 抽象概念
  let edit = new EditInPlace();
  this 指向的是 editor
  this.staticElement = document.createElement('span');
  this.convertToText(); //既是函数又是对象的方法 this 指向对象
  this.staticElement.addEventListener('click',function(){
      this => 对象
      this => this.staticElement
      作为事件来执行 内部的this指向事件发生的元素
  }
- 函数内部的this是执行时动态决定的，执行的方式决定的
  this.convertToEdit(); //函数是作为对象的方法被调用
- 箭头函数 this 指向上一级 这里是对象

- EditInPlace 类 construct + prototype (原型对象Object)
  new EditInPlace  
  function EditInPlace () { } 首字母大写 构造器
  EditInPlace.prototype = {
      convertToEdit：function(){}
      ...
  }
- this 的用法
- 代码的组织 attachEvents
- 状态的方法