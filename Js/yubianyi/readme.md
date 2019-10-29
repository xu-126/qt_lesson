# 预编译 四部曲 发生在函数执行之前
1. 创建AO对象
2. 找形参和变量声明 将变量声明和形参作为AO属性名 值为undefined
3. 将实参和形参值统一
4. 在函数体里找函数声明 将函数声明作为AO对象属性名 值赋予函数名
(后面将前面的操作覆盖)

A0{
    a:function(){}, a=123
    b:undefined,
    d:function()
}

A0{
    a:undefined  1                     1
    b:undefined  function(){} 2        2
    c:undefined    
    d:function(){}
}

# 预编译也发生在全局
1. 创建GO对象
2. 找变量声明 将变量声明和形参作为AO属性名 值为undefined
3. 在全局找函数声明 将函数声明作为AO对象属性名 值赋予函数名
(后面将前面的操作覆盖)

GO{
    global:undefined
    fn:function(){...}
}

运行时先从AO中找再到GO中找