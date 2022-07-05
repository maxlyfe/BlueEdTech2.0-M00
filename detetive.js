var prompt = require('prompt-sync')();

// Detetive
// Sim! É o mesmo jogo que fizemos em Portugol. Agora o desafio é traduzir ele para JS então, neste projeto, 
// faremos um jogo de detetive com tudo o que aprendemos até aqui.
// Este jogo deve funcionar da seguinte forma:
// O programa deve fazer 5 perguntas ao usuário com respostas de sim ou não.
// Caso o usuário responda sim, a 4 perguntas ou mais, devemos retornar que ele é culpado.
// Caso o usuário responda sim, a 3 perguntas, devemos retornar que ele é suspeito.
// Caso o usuário responda sim, a 2 perguntas ou menos, devemos retornar que ele é inocente.
// Critérios de aceitação:
// Precisa retornar resposta para todas as possibilidades de culpado, suspeito ou inocente.
// Precisa ter condicionais.

let culpado = 0;
let inocente = 0;

console.clear();
console.log('Foi reportado um assasinato no bairro onde você mora e a policia esta procurando o culpado.');
console.log();
console.log('Um policial chega perto de você para te fazer algumas perguntas, responda com sinceridade.');

console.log('Boa tarde Sr(a). Você estava no momento do crimem?: '); //Pergunta
let pergunaUm = prompt('Responda com SIM ou com Não: ').toLowerCase(); //Resposta

//Estrutura de definição de resposta.
if (pergunaUm !== 'sim' && pergunaUm !== 'nao') {
  pergunaUm = prompt('Responda com SIM ou com Não: ').toLowerCase();
} else if (pergunaUm == 'sim') {
  culpado++
} else if (pergunaUm == 'nao') {
  inocente++
};

console.clear(); //Limpando o console.
console.log('Você tinha algo contra a vitima? '); //Pergunta
let pergunaDois = prompt('Responda com SIM ou com Não: ').toLowerCase(); //Resposta

//Estrutura de definição de resposta.
if (pergunaDois !== 'sim' && pergunaDois !== 'nao') {
  pergunaDois = prompt('Responda com SIM ou com Não: ').toLowerCase();
} else if (pergunaDois == 'sim') {
  culpado++
} else if (pergunaDois == 'nao') {
  inocente++
};

console.clear(); //Limpando o console.
console.log('Você tinha alguma relação afetiva com a vitima? '); //Pergunta
let pergunaTres = prompt('Responda com SIM ou com Não: ').toLowerCase(); //Resposta

//Estrutura de definição de resposta.
if (pergunaTres !== 'sim' && pergunaTres !== 'nao') {
  pergunaTres = prompt('Responda com SIM ou com Não: ').toLowerCase();
} else if (pergunaTres == 'sim') {
  culpado++
} else if (pergunaTres == 'nao') {
  inocente++
};

console.clear(); //Limpando o console.
console.log('A vitima te devia dinheiro? '); //Pergunta
let pergunaQuatro = prompt('Responda com SIM ou com Não: ').toLowerCase(); //Resposta

//Estrutura de definição de resposta.
if (pergunaQuatro !== 'sim' && pergunaQuatro !== 'nao') {
  pergunaQuatro = prompt('Responda com SIM ou com Não: ').toLowerCase();
} else if (pergunaQuatro == 'sim') {
  culpado++
} else if (pergunaQuatro == 'nao') {
  inocente++
};

console.clear(); //Limpando o console.
console.log('Você tem armas de fogo? '); //Pergunta
let pergunaCinco = prompt('Responda com SIM ou com Não: ').toLowerCase(); //Resposta

//Estrutura de definição de resposta.
if (pergunaCinco !== 'sim' && pergunaCinco !== 'nao') {
  pergunaCinco = prompt('Responda com SIM ou com Não: ').toLowerCase();
} else if (pergunaCinco == 'sim') {
  culpado++
} else if (pergunaCinco == 'nao') {
  inocente++
};

if (inocente <= 4) {
  console.log('Peço por favor que coloque as mãos nas suas costas, você tem direito a ficar calado, tudo que falar pode e sera utilizado em sua contra.');
  console.log('Você é culpado');
} else if (inocente == 3) {
  console.log('Peço por favor que fique na sua casa, se você lembrar de algo mais peço que entre em contato.');
  console.log('Você é suspeito');
} else if (inocente => 2) {
  console.log('Você esta liberado, pode ir embora.');
  console.log('você é inocente');
};

