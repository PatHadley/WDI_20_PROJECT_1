# WDI_20_PROJECT_1

# Game Design 1


##Concept:

### Basics (MVP)
Retro 8-bit cycling racing game. Two players race around a velodrome by mashing buttons on their side of the keyboard. They start on opposite sides of the track and win by catching the other.

###User stories
REQS - 
PLAYER must be able to <DO X> because <BUSINESS CASE/VALUE> - N(1-13 on Fibonacci)


Player must be able to | <DO X> | because | <BUSINESS CASE/VALUE> | N(1-13 on Fibonacci) |
| --- | --- | --- | --- | --- |
Player must be able to | Make their sprite move with key presses | because | That’s the key competitive/fun element of the game | 8 |
Player must be able to | Know when they’ve caught the other player and won! | because | These are the win conditions | 5 |
Player must be able to | See their scores on the board | because | Know when they’ve beaten their buddy! | 2 |
Player must be able to | Reset the game | because | Keep playing with a fresh score sheet | 1 |

##Visual elements:
* Track - large oval with finish/start lines marked
** Cyclist avatars (one red, one blue)
* Scoreboard
** Games won
* Start/Reset button (press SPACEBAR)

##Interactive elements:
* Keyboard interface
** Player 1 (‘A’ and ‘S’ to pedal)
** Player 2 (‘K’ and ‘L’ to pedal)
** SPACEBAR to reset
* Countdown to start (makes inputs live)
*Animation on catch/finish
##Game engine elements:
*Start and countdown function
**Timer animation
**Make buttons ready for key press
*Measure cyclist speed function
**Take input from keys
**Calculate speed based on frequency of alternation
**Calculate cyclist position function
**Take speed and use it to travel a distance around track
*Calculate catch function
**Calculate when both cyclists overlap on the track
**Calculate which has caught the other
**Return win animation
**Count wins to scoreboard
*Reset function
**Clears scoreboard and triggers start

#Additional features
*A computer-driven player at constant speed but with selectable difficulty.
*Drafting - players are in teams of two and can press a button to attack and use the lead-out as a speed boost. (has to charge up over a number of laps?)
*Lap counter with optional max - Game ends and winner is the person closest to a catch.
*Crash feature if player holds both buttons for too long

Visual elements:
Track - large oval with finish/start lines marked
Cyclist avatars - choice of colours.
Scoreboard
Games won
Current speeds
Lap counter
Reset indicator (press SPACEBAR)
Interactive elements:
Keyboard interface
Player 1 (‘A’ and ‘S’ to pedal)
Player 2 (‘K’ and ‘L’ to pedal)
SPACEBAR to reset
Sound elements:
Crowd noises
Starter gun
Music



Pros
Cons
Low baseline for a working game
Repetitive play - could be boring
Simple graphics?
Still works with non-animated sprites?

Tricky win conditions
Players could be evenly matched?
Is it an endurance or speed event?

Easily extendible with extra features






