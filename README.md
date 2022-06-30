# 100-Prisoners-Riddle
100 Prisoners 100 Boxes Riddle from Veritasium

Link to YouTube video:
https://www.youtube.com/watch?v=iSNsgj1OCLA

## Functions

generateBoxes function generates a new array with numbers from 1 to 100 stored in random positions. The index of the array is the number of the boxes, the number stored in the array are the number slips stored within the boxes

search function is a recursive function to search the a generated boxes array. It takes 3 arguments, target, number and attemps. To start, pass your number x as search(x, x, 1).

prisonerExperiment is a function which generates a random array for you and executes the search function for all numbers from 1 to 100, thereby simulating the entirety of the 100 Prisoners Riddle event. It returns true if all the prisoners have found their numbers, false if any prisoners failed.

multiExperiments function runs multiple prisonerExperiment attemps for you. It takes one argument, the number of attempts you wish to perform. It returns the probability of success.
