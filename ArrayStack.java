package ConstructWeek;

class ArrayStack {
    private int[] stack;   // Array to store stack elements
    private int top;       // Index of the top element
    private int size;      // Maximum size of the stack

    // Constructor to initialize the stack
    public ArrayStack(int size) {
        this.size = size;
        this.stack = new int[size];
        this.top = -1;  // Initialize top as -1, indicating an empty stack
    }

    // Method to push an element onto the stack
    public void push(int element) {
        if (top >= size - 1) {
            System.out.println("Stack is full (Overflow).");
        } else {
            top++;
            stack[top] = element;
            System.out.println("Pushed " + element + " into the stack.");
        }
    }

    // Method to pop an element from the stack
    public int pop() {
        if (top == -1) {
            System.out.println("Stack is empty (Underflow).");
            return -1;  // Return -1 to indicate underflow
        } else {
            int poppedElement = stack[top];
            top--;
            System.out.println("Popped " + poppedElement + " from the stack.");
            return poppedElement;
        }
    }

    // Method to peek at the top element of the stack
    public int peek() {
        if (top == -1) {
            System.out.println("Stack is empty.");
            return -1;  // Return -1 to indicate the stack is empty
        } else {
            return stack[top];  // Return the top element
        }
    }

    // Method to check if the stack is empty
    public boolean isStackEmpty() {
        return top == -1;  // Return true if the stack is empty
    }
}
