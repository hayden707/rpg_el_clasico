# RPG EL CLASICO

## Date 2/9/22

### By: Hayden Anderson
[Deployed Link](https://rpgelclasico.surge.sh/)
---
![image](https://i.imgur.com/qMd1Z8M.png)
---
## Purpose
My first ever coding project, built two weeks after my intro classes in HTML/CSS/JavaScript, was to make a basic RPG battle system. I decided to return to that concept and remake a similar system, again limiting myself to vanilla HTML/CSS/JavaScript, to implement the new concepts I've subsequently learned and to see how far I've come as a software engineer.
--
## What I've learned
One of the main differences between my first project and RPG EL CLASICO is my developed understanding of objects. By storing most of the game information in objects, I was able to use far fewer lines of code than in my first project. Instead of hard coding information into unique functions for each game character, I was able to pull information stored in objects using template literals. 

![image](https://i.imgur.com/ugvQRPG.png)

These objects were essential to my game order as well. I wanted the order of the game to alternate between teams and repeat as long as neither team had depleted their stamina. To do this I created an array of player objects and created an index variable that I increased with each turn. I set the currentPlayer to the orderarray[index]. 

![image](https://i.imgur.com/fvL9iGS.png)
![image](https://i.imgur.com/Gq7xJeh.png)

I was also able to make the site responsive to mobile screens and tablets.

---
## Game Logic
---
Most of the game logic occurs within one function. The effects of all player moves are randomized. Players move across the board by altering their gridColumnStart on my game grid. The game index is increased and the next player is declared as the currentPlayer. A function checks to see if either team has won, and the process is repeated.

Here is a snippet of the first part of my game logic:
![image](https://i.imgur.com/iaKqcH9.png)


