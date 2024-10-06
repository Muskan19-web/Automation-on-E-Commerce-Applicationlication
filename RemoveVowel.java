package ConstructWeek;
//Name of the package 
//Here we are importing an Scanner Class for reading the input from the user
import java.util.Scanner;

//Creating a class named RemoveVowel
public class RemoveVowel {

//It is an Main method which is called by JVM(Java Virtual Machine)
	public static void main(String[] args) {
		
//		Creating an instance of Scanner class for reading the output from System.in
		Scanner scanner = new Scanner(System.in);
		
//		 To store the result of the string
		StringBuilder modified_string = new StringBuilder();
		
//		Asking the user to input the String
		System.out.println("Enter a String : ");
		
//		To store the input string in str in the form of String 
		String str = scanner.nextLine();
		
//		Using a for loop to iterate over the string
		for(int i = 0; i < str.length(); i++) {
			
//			To access the character present at i index
			char ch = str.charAt(i);
			
//			Checking using the if condition that the i index character is not a vowel
			if(ch != 'a' && ch != 'e' && ch != 'i' && ch != 'o' && ch != 'u' && ch != 'A' && ch != 'E' && ch != 'I' && ch != 'O' && ch != 'U') {
				
//				If the i index character is not vowel we are storing it in modified_string 
				modified_string.append(ch);
			}
		}
		
//		Printing out the modified string 
		System.out.println("The string with vowels removed is : " + modified_string);

//		This closes the Scanner object
		scanner.close();
	}

}
