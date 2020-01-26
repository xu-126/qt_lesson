class ListNode: 
    def __init__(self,val):
        self.val = val
        self.next = None 
    def __repr__(self): # 覆盖类里面的方法
        if self:
            return "{}-{}".format(self.val,repr(self.next))
class Solution:
    def partition(self,head,x):
        dummySmaller,dummyGreater = ListNode(-1),ListNode(-1)
        smaller,greater = dummySmaller,dummyGreater

        while head:
            if head.val < x:
                smaller.next = head
                smaller = smaller.next
            else:
                greater.next = head
                greater = greater.next
            head = head.next
        smaller.next = dummyGreater.next
        greater.next = None

        return dummySmaller.next

n1 = ListNode(1)
n2 = ListNode(4)
n3 = ListNode(3)
n4 = ListNode(2)
n5 = ListNode(5)
n6 = ListNode(2)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
n5.next = n6

x = Solution()
print(x.partition(n1,3))