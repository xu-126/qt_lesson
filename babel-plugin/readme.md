## 流程
源代码 -> 解析 -> AST(抽象语法树) -> 增删改查 -> AST -> 另一份源代码
Babel生成了的AST有哪些节点？ 你可以把Babel转换的结果打印出来 https://astexplorer.net/

增删改查 
###  Path
每次访问节点方法时，都会传入一个path参数，这个path参数中包含了节点的信息以及节点和所在的位置，以供对特定节点进行操作
```js
── 属性      
  - node   当前节点
  - parent  父节点
  - parentPath 父path
  - scope   作用域
  - context  上下文
  - …
── 方法
  - get   当前节点
  - findParent  向父节点搜寻节点
  - getSibling 获取兄弟节点
  - replaceWith  用AST节点替换该节点
  - replaceWithMultiple 用多个AST节点替换该节点
  - insertBefore  在节点前插入节点
  - insertAfter 在节点后插入节点
  - remove   删除节点
  - …
```


