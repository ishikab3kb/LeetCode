/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* temp1=l1;
        ListNode* temp2 =l2;
        ListNode* head;
        ListNode* prev;
        int carry=0;
        while((temp1!=NULL)&&(temp2!=NULL))
        {
            temp1=temp1->next;
            temp2=temp2->next;
        }
        if(temp1!=NULL)
        {
            temp1=l1;
            temp2=l2;
            head=l1;
        }
        else
        {
            temp1=l2;
            temp2=l1;
            head=l2;
        }
        while((temp1!=NULL)&&(temp2!=NULL))
        {
            temp1->val=temp1->val+temp2->val+carry;
            carry=temp1->val/10;
            temp1->val=temp1->val%10;
            prev=temp1;
            temp1=temp1->next;
            temp2=temp2->next;
        }
        if(temp1!=NULL)
        {
            while(temp1!=NULL)
            {
                temp1->val=temp1->val+carry;
                carry=temp1->val/10;
                temp1->val=temp1->val%10;
                prev=temp1;
                temp1=temp1->next;
            }
        }
        if(carry==1)
        {
            ListNode* temp=new ListNode();
            temp->val=1;
            temp->next=NULL;
            prev->next=temp;
        }
        return head;
    }
};