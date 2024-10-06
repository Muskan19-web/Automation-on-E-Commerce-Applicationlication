package ConstructWeek;

import java.util.Scanner;

public class Operations_On_Stack_Java {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the size of the stack:");
        int size_of_stack = scanner.nextInt();

        ArrayStack stack = new ArrayStack(size_of_stack);  // Create a stack object
        int user_input;

        do {
            // Display menu options
            System.out.println("\nStack Operations:");
            System.out.println("1. Push an element to the stack");
            System.out.println("2. Pop an element from the stack");
            System.out.println("3. Peek the top element of the stack");
            System.out.println("4. Check if the stack is empty");
            System.out.println("5. Exit");
            System.out.print("Enter your choice: ");
            user_input = scanner.nextInt();

            // Perform stack operations based on user input
            switch (user_input) {
                case 1: {
                    System.out.print("Enter an element to push: ");
                    int entered_element = scanner.nextInt();
                    stack.push(entered_element);  // Push the element onto the stack
                    break;
                }
                case 2: {
                    stack.pop();  // Pop the top element from the stack
                    break;
                }
                case 3: {
                    int top_element = stack.peek();  // Peek the top element
                    if (top_element != -1) {
                        System.out.println("Top element: " + top_element);
                    }
                    break;
                }
                case 4: {
                    if (stack.isStackEmpty()) {
                        System.out.println("Stack is empty.");
                    } else {
                        System.out.println("Stack is not empty.");
                    }
                    break;
                }
                case 5: {
                    System.out.println("Exiting stack operations...");
                    System.out.println("Exited");
                    break;
                }
                default: {
                    System.out.println("Invalid choice. Please try again.");
                    break;
                }
            }
        } while (user_input != 5);  // Loop until the user chooses to exit

        scanner.close();
    }
}