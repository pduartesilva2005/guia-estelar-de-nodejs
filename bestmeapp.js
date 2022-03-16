const questions = [
  'O que aprendi hoje?',
  'O que me deixou aborrecido. O que poderia fazer para melhorar?',
  'O que me deixou feliz hoje?',
  'Quantas pessoas eu ajudei?'
];

const ask = (index = 0) => {
  process.stdout.write('\n\n' + questions[index] + ' > ');
};

ask();

const answers = [];

process.stdin.on('data', data => {
  answers.push(data.toString().trim());

  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on('exit', () => {
  console.log(`
    Bacana Pedro!

    O que você aprendeu hoje foi:
    ${answers[0]}

    O que te aborreceu e você poderia melhoria foi:
    ${answers[1]}

    O que te deixou feliz foi:
    ${answers[2]}

    Você ajudou ${answers[3]} pessoas hoje!
    
    Volte amanhã para novas reflexões!!
  `);
});
