class ListNode: 
    def __init__(self,val):
        self.val = val
        self.next = None 
    def __repr__(self): # 覆盖类里面的方法
        if self:
            return "{}-{}".format(self.val,repr(self.next))

class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        if not head: return None
        prev = None
        cur = head
        while cur:
            cur.next,prev,cur = prev,cur,cur.next
        return prev

n1 = ListNode(1)
n2 = ListNode(2)
n3 = ListNode(3)
n4 = ListNode(4)
n5 = ListNode(5)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5

x = Solution()
print(x.reverseList(n1))