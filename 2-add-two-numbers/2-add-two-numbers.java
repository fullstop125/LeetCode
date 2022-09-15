/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    // Head of the new linked list - this is the head of the resultant list
        ListNode head = null;
        // Reference of head which is null at this point
        ListNode temp = null;
        // Carry
        int carry = 0;
        // Loop for the two lists
        while (l1 != null || l2 != null) {
            // At the start of each iteration, we should add carry from the last iteration
            int sum = carry;
            // Since the lengths of the lists may be unequal, we are checking if the
            // current node is null for one of the lists
            if (l1 != null) {
                sum += l1.val;
                l1 = l1.next;
            }
            if (l2 != null) {
                sum += l2.val;
                l2 = l2.next;
            }
            // At this point, we will add the total sum % 10 to the new node
            // in the resultant list
            ListNode node = new ListNode(sum % 10);
            // Carry to be added in the next iteration
            carry = sum / 10;
            // If this is the first node or head
            if (temp == null) {
                temp = head = node;
            }
            // For any other node
            else {
                temp.next = node;
                temp = temp.next;
            }
        }
        // After the last iteration, we will check if there is carry left
        // If it's left then we will create a new node and add it
        if (carry > 0) {
            temp.next = new ListNode(carry);
        }
        return head;
    }
}