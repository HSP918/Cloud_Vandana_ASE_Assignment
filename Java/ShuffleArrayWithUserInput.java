import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class ShuffleArrayWithUserInput {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter values separated by spaces (e.g., 1 2 3 4 5 6 7):");
        String input = scanner.nextLine();

        // Split the input string into an array of strings
        String[] inputValues = input.split(" ");

        // Create an ArrayList to store the user input values
        ArrayList<Integer> userInputList = new ArrayList<>();

        // Parse and add each input value to the ArrayList
        for (String value : inputValues) {
            try {
                userInputList.add(Integer.parseInt(value));
            } catch (NumberFormatException e) {
                System.err.println("Invalid input. Please enter integers separated by spaces.");
                System.exit(1);
            }
        }

        // Shuffle the ArrayList
        Collections.shuffle(userInputList);

        System.out.println("Shuffled Array: " + userInputList);
    }
}
