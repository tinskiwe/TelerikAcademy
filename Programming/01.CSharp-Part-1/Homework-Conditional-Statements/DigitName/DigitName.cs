﻿using System;

class DigitName
{
    static void Main()
    {
        // Write a program that asks for a digit and depending on the input shows the name of that digit (in English) using a switch statement.

        Console.Write("Please enter a digit (0-9): ");
        byte digit;
        while (!byte.TryParse(Console.ReadLine(), out digit) || digit < 0 || digit >9)
        {
            Console.Write("Please enter a postive integer between 0 and 9: ");
        }
        switch (digit)
        {
            case 0:
                Console.WriteLine("Zero");
                break;
            case 1:
                Console.WriteLine("One");
                break;
            case 2:
                Console.WriteLine("Two");
                break;
            case 3:
                Console.WriteLine("Three");
                break;
            case 4:
                Console.WriteLine("Four");
                break;
            case 5:
                Console.WriteLine("Five");
                break;
            case 6:
                Console.WriteLine("Six");
                break;
            case 7:
                Console.WriteLine("Seven");
                break;
            case 8:
                Console.WriteLine("Eight");
                break;
            case 9:
                Console.WriteLine("Nine");
                break;
            default:
                Console.WriteLine("We should never get here");
                break;
        }
    }
}