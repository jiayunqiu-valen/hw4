# hw4

How many lines are drawn each frame? In other words, how often does the for loop run?

for (var x = 10; x < width-10; x = x + 10)

this means x will increase 10 each time, and if x less then this length (width-10), the statement is true and the loop will keep run, if x equal or more than (width-10), the loop will stop and restart 

What do the first, second, and third appearances of the number 10 do in the code?

first one identifies the variable x, which also identify the line x start from 10

the second one shows the condition that if x less than width-10 this length( in (400,400) canvas means 390) the loop will keep running

the last one shows x will increase 10 each time when the loop is running

How many times does the loop body run each frame, once the x and y arrays are full?

 for (var i = 0; i < x.length; i = i + 10)
 
 as x. length means all the elements in arary will run


What are two ways of increasing the spacing between rings?

one way is to increase the number of (i = i + 10)


How can you make the ellipse trail longer?

change the numbers in () of these two, the bigger amount, the longer trail  
x = x.slice(-200); 
y = y.slice(-200); 

