var readlineSync = require ('readline-sync');

console.log('\x1b[33m%s\x1b[39m', "H3LL0,");

var username = readlineSync.question("what is your name? ");
console.log("Welcome "+username.toUpperCase()+" to the Naruto Fan Quiz! ");

console.log('\x1b[2m%s\x1b[0m', "\nPLAYER DETAILS \n_____________\nName : "+username.toUpperCase()+"\n"+"Scores = 0\n");
var score = 0;

console.log("INSTRUCTION : - \n\nyou will be given 4 option for each question, you are supposed to choose the right answer aand enter it's corresponding option number. GOOD LUCK! \n");

if(readlineSync.question("enter y to continue th game [y/n]: ")=="y")
{
  console.clear();

// function to compare the corresponding answers 
function play(question, answer)
  {
    console.log();
    var userAnswer = readlineSync.question(question);
    if(userAnswer === answer)
    {
      score = score + 2;
      console.log('\x1b[32m%s\x1b[0m',"You got it Right!");
      console.log('\x1b[2m%s\x1b[0m',"*** earned points : +2 ***");
    }
    else
      console.log('\x1b[31m%s\x1b[0m', "You got it wrong!");
  }

  // array holding question and asnwer's as object values

  var questions = [
              {
                question: "what is Naruto's full name? \n 1. Naruto Hatake\n 2. Naruto Uchiha \n 3. Naruto Uzumaki \n 4. Naruto Khan \n",
                answer: "3"
              },

              {
                question: "What is Naruto's hair color ? \n 1. Orange\n 2. Pink \n 3. Yellow \n 4. Black \n",
                answer: "3"
              },

              {
                question: "Who was Naruto's father ? \n 1. Hatake Kakashi\n 2. Minato Namikaze \n 3. Hashirama Senju \n 4. Boruto Uzumaki \n",           
                answer: "2"
              },

              {
                 question: "what was Naruto's pet Jutsu ? \n 1. Kage Bunshin no Jutsu \n 2. Kuchiyose no Jutsu \n 3. Chidori \n 4. Sharingan \n",                
                 answer: "1"
              },
  
              {
                 question: "Who taught Naruto Rasengan ? \n 1. Kakashi Hatake \n 2. Minato Namikaze \n 3. Jiraya Sensei \n 4. Choji Akimichi \n",
                 answer: "3"
              },
              
              {
                 question: "who was the strongest Taijutsu User ? \n 1. Shin Uchiha \n 2. Guy Sensei \n 3. Neji Hyuga \n 4. Madara Uchiha \n",
                 answer: "2"
               },
               {
                 question: "Who was the mass murderer of the Uchiha clan \n 1. Kakashi Hatake \n 2. Sakura Haruno \n 3. Hashirama Senju \n 4. Itachi Uchiha \n",
                 answer: "4"
               },
               {
                  question: "how many tails does Kurama had when he was little? \n 1. One Tail \n 2. Three Tails \n 3. Eight Tails \n 4. Nine Tails  \n",
                  answer: "4",
               },
               {
                 question: "Before Naruto, Nine Tail was was sealed inside whom? \n 1. Kushina Uzumaki \n 2. Minato Namikaze \n 3. Madara Uchiha \n 4. Shikamru Nara \n",
                 answer: "1"
               },
               {
                 question: "Who was called as The Yellow Flash ? \n 1. Naruto Uzumaki \n 2. Minato Namikaze \n 3. Sasuke Uchiha \n 4. Saukra Haruno \n",
                 answer: "2"
               },
               {
                 question: "who was Naruto's best friend? \n 1. Shikamaru Nara\n 2. Hinata Hyuga \n 3. Sasuke Uchiha \n 4. Sakura Haruno \n",
                 answer: "3"
               },
               {
                 question: "What was Naruto's Ambition in life? \n 1. to become the President of the Leaf village \n 2. to become an Entrepreneur \n 3. to become the CTO \n 4. to become the Hokage of the Leaf Village \n",
                 answer: "4"
               },
  ];

  // calling the above function through a loop
for(var i=0; i <questions.length; i++)
  {
    console.log('\x1b[4m%s\x1b[0m', "\nQuestion "+(i+1));
    play(questions[i].question, questions[i].answer);
  }

console.log('\x1b[7m%s\x1b[0m', "\nThank you for playing The Naruto Fan quiz!");
  
  if(score >= 24)
    console.log("\x1b[43m\x1b[37m%s\x1b[0m","Congratulations! You are a real Naruto Fan :) ");
console.log();
console.log("\x1b[32m\x1b[40m%s\x1b[0m","Your total score : "+ score);
console.log('\x1b[33m\x1b[3m%s\x1b[0m',"\nSayonara, have a nice day! :) ");  
console.log('%c❤️ Dattebayo! ', 'font-size: 117px');
}
  
else
{
  console.log(username+" - Baka! :3");
}