/* Application Purpose: Project Game - Who Wants to Be a Millionaire * 
 * Author: Demilson Moreira Bose Junior, Beatriz Goulart Silva, Pedro Didoné (COMPLETAR O NOME), Roselane (COMPLETAR O NOME), Paulo de Castro Pinheiro Neto * 
 * Date: 11/07/2023 * 
 * Time: 4:00 pm */

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

public class QuizGameTestHarness {
    // The question is in the following structure: "Question?", "Alternatives A), B), C) or D)", + "Correct Answer", separed by a comma
    private static String[][] quizEasy = {
        // Array Easy questions here
        { "What is the capital of France?", "a) London", "b) Paris", "c) Rome", "d) Berlin", 
        "b" }, // Correct answer
        { "Who painted the Mona Lisa?", "a) Pablo Picasso", "b) Leonardo da Vinci", "c) Vincent van Gogh", "d) Michelangelo", 
        "b" }, // Correct answer
        { "What is the largest planet in our solar system?", "a) Mars", "b) Venus", "c) Jupiter", "d) Saturn",
        "c" }, // Correct answer
        { "How many continents are there in the world?", "a) 5", "b) 6", "c) 7", "d) 8", 
        "c" }, // Correct answer
        { "Which color is associated with the sun?", "a) Blue", "b) Red", "c) Yellow", "d) Green", 
        "c" }, // Correct answer
        { "Which animal is the fastest on land?", "a) Cheetah", "b) Lion", "c) Elephant", "d) Giraffe", 
        "a" }, // Correct answer
        { "Who wrote the play \"Romeo and Juliet\"?", "a) William Shakespeare", "b) George Bernard Shaw", "c) Arthur Miller", "d) Tennessee Williams", 
        "a" }, // Correct answer
        { "How many sides does a square have?", "a) 2", "b) 3", "c) 4", "d) 5", 
        "c" }, // Correct answer
        { "What is the name of the theory that suggests the universe originated from a big explosion?", "a) Big Bang Theory", "b) Theory of Evolution", "c) Theory of Relativity", "d) Quantum Theory",
        "a" }, //Correct answer
        { "Who is the founder of Facebook?", "a) Mark Zuckerberg", "b) Bill Gates", "c) Jeff Bezos", "d) Elon Musk",
        "a" }, // Correct answer
        { "What is the capital of Spain?", "a) Madrid", "b) Barcelona", "c) Valencia", "d) Seville", 
        "a" } // Correct answer
};

private static String[][] quizMedium = {
        // Array Medium questions here
        { "Which country is the most populous in the world?", "a) China", "b) India", "c) United States", "d) Russia", 
        "a" }, // Correct answer
        { "Who wrote the novel \"1984\"?", "a) George Orwell", "b) J.R.R. Tolkien", "c) F. Scott Fitzgerald", "d) Ernest Hemingway", 
        "a" }, // Correct answer
        { "What is the chemical symbol for the element oxygen?", "a) O2", "b) H2O", "c) C", "d) O", 
        "d" }, // Correct answer
        { "Who painted the artwork \"Starry Night\"?", "a) Pablo Picasso", "b) Vincent van Gogh", "c) Salvador Dali", "d) Claude Monet", 
        "b" }, // Correct answer
        { "Who was the first person to walk on the moon?", "a) Neil Armstrong", "b) Buzz Aldrin", "c) Yuri Gagarin", "d) Alan Shepard", 
        "a" }, // Correct answer
        { "What is the largest ocean on Earth?", "a) Atlantic Ocean", "b) Pacific Ocean", "c) Indian Ocean", "d) Southern Ocean", 
        "b" }, // Correct answer
        { "What is the capital of Italy?", "a) Rome", "b) Milan", "c) Florence", "d) Venice", 
        "a" }, // Correct answer
        { "Who wrote the novel \"Pride and Prejudice\"?", "a) Jane Austen", "b) Charlotte Bronte", "c) Emily Dickinson", "d) Virginia Woolf", 
        "a" }, // Correct answer
        { "Who proposed the theory of relativity?", "a) Albert Einstein", "b) Isaac Newton", "c) Galileo Galilei", "d) Nikola Tesla", 
        "a" }, // Correct answer
        { "What is the last name of the British royal family?", "a) Windsor", "b) Tudor", "c) Plantagenet", "d) Stuart", 
        "a" } // Correct answer
};

private static String[][] quizHard = {
        // Array Hard questions here
        { "In what year did the French Revolution begin?", "a) 1789", "b) 1812", "c) 1492", "d) 1914", 
        "a" }, // Correct answer
        { "Who is considered the father of Western philosophy?", "a) Plato", "b) Socrates", "c) Aristotle", "d) Descartes", 
        "a" }, //Correct answer
        { "What is the chemical formula for caffeine?", "a) C2H5OH", "b) NaCl", "c) CO2", "d) C8H10N4O2", 
        "d" }, //Correct answer
        { "Who painted the artwork \"The Last Supper\"?", "a) Leonardo da Vinci", "b) Michelangelo", "c) Rembrandt", "d) Pablo Picasso", 
        "a" }, //Correct answer
        { "What is the numerical value of π (pi)?", "a) 3.1415", "b) 3.1425", "c) 3.1580", "d) 3.1421", 
        "a" }, //Correct answer
        { "Who wrote the novel \"One Hundred Years of Solitude\"?", "a) Gabriel Garcia Marquez", "b) Ernest Hemingway", "c) Isabel Allende", "d) Julio Cortazar", 
        "a" }, //Correct answer
        { "What is the capital of Canada?", "a) Toronto", "b) Ottawa", "c) Vancouver", "d) Montreal", 
        "b" }, //Correct answer
        { "Who was the German physicist who formulated the laws of planetary motion?", "a) Johannes Kepler", "b) Max Planck", "c) Werner Heisenberg", "d) Albert Einstein",
        "a" }, //Correct answer
        { "What is the capital of Australia?", "a) Sydney", "b) Melbourne", "c) Canberra", "d) Brisbane", 
        "c" } //Correct answer
};

// Main Method
public static void main(String[] args) {
        int numQuestions = 10; // Number of Questions
        int currentQuestion = 1; // Starting Question
        int score = 0; // Player Score
        double money = 0; // Player Money

        //Scanner to get user answer
        Scanner scanner = new Scanner(System.in);

        //Introduction
        System.out.println("Welcome! Are You Ready To Became A Millionare?\n");
        System.out.println("\nPlease, enter your name: ");
        String userName = scanner.nextLine();
        System.out.println("Nice to meet you, " + userName + "\n");

        System.out.println("Below you can see the instructions for the game\n");
        String asciiArt = "                                __...--~~~~~-._   _.-~~~~~--...__\n" +
        "                              //               `V'                \\\\ \n" +
        "                             //                 |                  \\\\ \n" +
        "                           //__...--~~~~~~-._   |  _.-~~~~~~--...__\\\\ \n" +
        "                           //__.....----~~~~._\\ | /_.~~~~----.....__\\\\\n" +
        "                           ===================\\\\|//===================\n";

        System.out.println(asciiArt);
        System.out.println("\nThe game contains 10 general questions, every time you get it right you win more money.\r\n" + //
                "While you are playing you will have the choice of giving up and leaving with $10.000\r\n" + //
                "after 5 questions or $100.000 when there is only two questions left for one MILLION!\n");

        System.out.println("\nAre you ready? Answer ONLY Y/N");
        String ready = scanner.nextLine().toLowerCase();

        if (ready.equals("y")) {
            System.out.println("\nStarting the game...");

        //Randomize questions
        Random random = new Random();
        
        List<String[]> askedQuestions = new ArrayList<>(); // Track asked questions

        while (currentQuestion <= numQuestions) {
            String[][] selectedQuiz;
            String difficulty;

            if (currentQuestion <= 4) {
                selectedQuiz = quizEasy;
                difficulty = "Easy";
            } else if (currentQuestion <= 7) {
                selectedQuiz = quizMedium;
                difficulty = "Medium";
            } else {
                selectedQuiz = quizHard;
                difficulty = "Hard";
            }

            int questionIndex;
            String[] question;

            // Randomly select a question that hasn't been asked before
            do {
                questionIndex = random.nextInt(selectedQuiz.length);
                question = selectedQuiz[questionIndex];
            } while (askedQuestions.contains(question));

            askedQuestions.add(question); // Add the question to the asked questions list

            System.out.println("Question " + currentQuestion + " (" + difficulty + "):\n");
            System.out.println(question[0]); // Display the question

            for (int i = 1; i <= 4; i++) {
                System.out.println(question[i]); // Display the answer options
            }

            System.out.print("Your answer: ");
            String userAnswer = scanner.nextLine().trim().toLowerCase();

            // Validate the user's answer
            while (!userAnswer.matches("[a-d]")) {
                System.out.println("Invalid input! Please enter A, B, C, or D.");
                System.out.print("Your answer: ");
                userAnswer = scanner.nextLine().trim().toLowerCase();
            }

                        if (userAnswer.equals(question[5].toLowerCase())) {
                System.out.println("Correct!\n");
                score++;

                                // Increase the money based on the current question
                if (currentQuestion == 1) {
                    money = 1000;
                } else if (currentQuestion == 2) {
                    money = 5000;
                } else if (currentQuestion == 3) {
                    money = 10000;
                } else if (currentQuestion == 4) {
                    money = 25000;
                } else if (currentQuestion == 5) {
                    money = 50000;
                } else if (currentQuestion == 6) {
                    money = 100000;
                } else if (currentQuestion == 7) {
                    money = 200000;
                } else if (currentQuestion == 8) {
                    money = 300000;
                } else if (currentQuestion == 9) {
                    money = 500000;
                } else if (currentQuestion == 10) {
                    money = 1000000;
                }

                System.out.println("You have $" + money);

                if (currentQuestion == 5) {
                    System.out.println("\nCongratulations! You reached the checkpoint! Do you want to continue to the next question (Y/N)?");
                    System.out.println("You already have $" + money);
                    System.out.println("If you choose not going further, you will earn $10.000");
                    String continueAnswer = scanner.nextLine().trim().toLowerCase();
                    if (!continueAnswer.equals("y")) {
                        money = 10000;
                        System.out.println("Congratulations! You won $" + money);
                        break;
                    }
                }

                if (currentQuestion == 8) {
                    System.out.println("You reached the second checkpoint! Do you want to continue to the next question (Y/N)?");
                    System.out.println("You already have $" + money);
                    System.out.println("It is only up to you either you are leaving here with a milion dollars today or not!");
                    System.out.println("If you choose not going further, you will earn $100.000");
                    String continueAnswer = scanner.nextLine().trim().toLowerCase();
                    if (!continueAnswer.equals("y")) {
                        money = 100000;
                        System.out.println("Congratulations! You won $" + money);
                        break;
                    }
                }
            } else {
                System.out.println("Incorrect answer. Game Over.");
                break;
            }

            currentQuestion++;
            System.out.println();
        }

        if (currentQuestion > numQuestions) {
            System.out.println("Congratulations!");
            System.out.println("Total amount of money earned: $" + money);

            String asciiArtfireworks = "                                   .''.\n" +
                          "       .''.      .        *''*    :_\\/_:     .\n" +
                          "      :_\\/_:   _\\(/_  .:.*_\\/_*   : /\\ :  .'.:.'.\n" +
                          "  .''.: /\\ :    /)\\   ':'* /\\ *  : '..'.  -=:o:=-\n" +
                          " :_\\/_:'.:::.  | ' *''*    * '\\.'/.'\\(/_'.'.':'.\n" +
                          " : /\\ : :::::  =  *_\\/_*     -= o =- /)\\    '  *\n" +
                          "  '..'  ':::' === * /\\ *     .'/.'.  ' ._____\n" +
                          "      *        |   *..*         :       |.   |' .---\"|\n" +
                          "        *      |     _           .--'|  ||   | _|    |\n" +
                          "     .-----.   |  .-'|       __  |   |  |    ||      |\n" +
                          " ___'       ' /\"\\ |  '-.\"\".    '-'   '-.'    '`      |____\n" +
                          "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                          "                      ~-~-~-~-~-~-~-~-~-~   /|\n" +
                          "     )          ~-~-~-~-~-~-~-~  /|~       /_|\\\n" +
                          "        _-H-__  -~-~-~-~-~-~     /_|\\    -~======-~\n" +
                          "~-\\XXXXXXXXXX/~     ~-~-~-~     /__|_\\ ~-~-~-~\n" +
                          "-~-~-~-~-~    ~-~~-~-~-~-~    ========  ~-~-~-~";

            System.out.println(asciiArtfireworks);

        }

        } else {
            System.out.println("OK, you are not ready. Game canceled.");
        }

       scanner.close();
    }

}