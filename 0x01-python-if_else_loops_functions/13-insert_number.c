#include <stdio.h>
#include <stdlib.h>

typedef struct listint_t {
    int data;
    struct listint_t *next;
} listint_t;

listint_t *insert_node(listint_t **head, int number) {
    listint_t *new_node = malloc(sizeof(listint_t));
    if (new_node == NULL) {
        return NULL; // Memory allocation failed.
    }
    
    new_node->data = number;
    new_node->next = NULL;
    
    // If the list is empty or the new node should be inserted at the beginning.
    if (*head == NULL || number < (*head)->data) {
        new_node->next = *head;
        *head = new_node;
        return new_node;
    }
    
    listint_t *current = *head;
    
    // Traverse the list to find the correct position to insert the new node.
    while (current->next != NULL && current->next->data < number) {
        current = current->next;
    }
    
    // Insert the new node into the sorted position.
    new_node->next = current->next;
    current->next = new_node;
    
    return new_node;
}

// Helper function to print the linked list.
void print_list(listint_t *head) {
    listint_t *current = head;
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\n");
}

int main() {
    listint_t *head = NULL;
    
    // Insert nodes into the sorted linked list.
    insert_node(&head, 5);
    insert_node(&head, 2);
    insert_node(&head, 8);
    insert_node(&head, 1);
    
    // Print the sorted linked list.
    printf("Sorted Linked List: ");
    print_list(head);
    
    return 0;
}
