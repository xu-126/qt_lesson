https://blog.csdn.net/weixin_42397257/article/details/88432012
前端如何实现hash路由？

两种方式：
1. 利用history对象实现前端路由
2. 监听window对象的hashchange事件实现前端路由

何为hash
hash即URL中"#"字符后面的部分。
hash值的改变不会导致页面重新加载。
通过window.location.hash属性获取和设置hash值。

什么时候会触发hashchange事件呢?
当hash值发生改变的时候，就会触发hashchange事件，事件对象可以拿到oldURL和newURL两个属性，分别代表改变前的url和改变后的url

