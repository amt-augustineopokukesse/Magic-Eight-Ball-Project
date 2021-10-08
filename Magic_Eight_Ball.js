// Define username variable
let userName = '';
// User greeting
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
// User question for magic eight ball
let userQuestion = 'Will I be a famous football player?';
// print question
console.log(`You asked: '${userQuestion}'`);
// Creating the randomNumber variable
let randomNumber = Math.floor(Math.random() * 8);
// eightBall variable
let eightBall = '';
// Control flow
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;  
  case 2:
    eightBall = 'Reply hazy try again';
    break;   
  case 3:
    eightBall = 'Cannot predict now';
    break;    
  case 4:
    eightBall = 'Do not count on it';
    break;    
  case 5:
    eightBall = 'A big no';
    break;   
  case 6:
    eightBall = 'Outlook not so good';
    break;  
  case 7:
    eightBall = 'Signs point to yes';
    break;    
  default:
    eightBall = 'Do a bit of soul searching for the answer';
    break;  
}
// Log Eight Ball’s answer to the console
console.log(`Magic Eight Ball says: ${eightBall}`);