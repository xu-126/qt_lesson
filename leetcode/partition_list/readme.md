# leetcode86 分隔链表之python实现

需要分成两个区 每个节点的初始相对位置

1 2 2   4 3 5

1. 形成两个区 每个区都是链表  定义两个链表 smaller bigger   dummySmaller dummySmaller
2. 一次遍历链表  比 x 值小的 smaller区   否则 bigger 区
3. 将这两个链表连起来