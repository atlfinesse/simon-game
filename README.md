Completed Screenshots

![Landing Page](<img src="./Screen Shot 2020-10-12 at 8.48.50 AM.png" alt="Landing Page">)

![Hard Mode](<img src="./Screen Shot 2020-10-13 at 12.01.47 PM.png" alt="Hard Mode">)

Project Description
This will be a game of Simon. The game board will have 4 clickable buttons that will light up in a random order. The objective of the game will be to try to mimic the lights in whatever order they occur and record a score. After each successful sequence the player will go on to the next round and the difficulty will increase. This will repeat until the player loses.

User Stories
MVP Goals
As a player, I want the game to start when I press the start button, so I can play the game.
As a player, I want to be able to clearly see which button needs to be pressed.
As a player, I want my game to recognize when I click a button, so that my score can increase.
As a player, I want to be notified when I lose, so that I know the game is over
As a player, I want my score to update automatically so that I don't need to keep track.
As a player, I want the game to restart when I press the button, so that I can easily play again.
As a player with a disability, I would like the game to be accessible to me, so that I can also play.
As a player, I want a winning screen animation, so that I can be congratulated for setting a new high score.
As a player, I want to hear a sound when something lights up, so I have an audio cue to listen for.
As a player, I want to be able to choose a difficulty setting, so that I can challenge myself.

![Wire Frame](<img src="./simon-wireframe.png" alt="Wire Frame">)

I had a few major hurdles to overcome in order to get the game to work properly.
1. A lot of my testing went wrong in the beginning becuase I needed to make sure that my strings were exactly the same. At first I was comparing them wrong but eventually found the bug and fixed it.
2. I needed to find a way to create divs and place them in the correct spot. I did a lot of research to find out how to resize divs and position them with css and not have to use flexbox or grid to sacrifice functionality.
3. The setTimeout function in Javascript and ensuring that the timings work is very tricky. I had to do a lot of testing to ensure that they worked and that the scopes of each functions lined up and were timed well.
4. I had never used audio files in html before, but learned how to because of this project.
5. Actually figuring out the logic of the game was a challenge at first but pseudocoding it helped me to understand what needed to happen at each step of the way.
6. The various classes needed and functions needed to be as DRY as possible and be organized in an understandable fashion so I tried to be as concise as possible.