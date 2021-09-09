const readlineSync = require('readline-sync');
const chalk = require('chalk');
const gradient = require('gradient-string');
var score = 0;

console.log(chalk.bgHex('#351431').underline(gradient.cristal('              HOW WELL DO YOU KNOW RONAK?              ')));

const highScores = [
  {
    name: 'Ronak',
    score: '3'
  },
  {
    name: 'Rohit',
    score: '2'
  }
];


const questions = [
  {
    question: 'What\'s my age? ',
    answer: '24'
  },
  {
    question: `My qualification? Type your answer in following format: ${chalk.bold.cyan('Degree(Specialization)')} `,
    answer: 'Bachelor of Engineering(Computer)'
  },
  {
    question: 'My favorite sport? ',
    answer: 'Cricket'
  }
];


function welcome(){
  console.log(`

  Welcome ${chalk.bgHex('#DEADED').underline(userNameTitleCase)} to ${chalk.italic (gradient.teen('"How well do you know Ronak?"'))}
  
  `)
};


function askQuestions(questions) {
  questions.forEach(
    ques => {
      var userAnswer = readlineSync.question(chalk.hex('#DEADED').bold(ques.question));  
      checkAnswer(userAnswer, ques.answer)
    }
  )
};

function checkAnswer(userAnswer, answer) {
  if(userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.green`
    Right answer.`)
    score++;
  } else {
    console.log(chalk.red`
    Wrong answer.`)
  }
  console.log(chalk`
  Current score: {magenta ${score}}.
  `)
  console.log(chalk.bgRedBright(`
  --------------------------------------`))
  console.log(`
  `);
};

function showScores() {
  if(score < 2) {
      console.log(chalk.bold.red(`Your final score is: ${score}.`));
    } else {
    console.log(chalk.bold.green(`YAY, Guess you know me well. You SCORED:  ${score}`));
  }

  //console.log("Check out the high scores, if you should be there send me screenshot and I'll update it");
  if(score === 3){
    highScores.push(
      {
        name:userNameTitleCase,
        score: score
      })
  }

  highScores.map(score => console.log(score.name, " : ", score.score))
};

function toTitleCase(string) {
  return string.split(' ')
   .map(s => s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase())
   .join(' ')
  
}

var userName = readlineSync.question(chalk.italic.cyan('What\'s your name? '));
var userNameTitleCase = toTitleCase(userName);

welcome();
askQuestions(questions);
showScores();