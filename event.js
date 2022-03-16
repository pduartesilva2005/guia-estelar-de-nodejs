const { inherits } = require('util');
const { EventEmitter } = require('events');

function Character(name) {
  this.name = name;
}

inherits(Character, EventEmitter);

const character = new Character('Chapolin');

character.on('help', () => console.log(`Eu o ${character.name} Colorado!`));

console.log('Oh! E agora, quem poderá me defender?');
character.emit('help');
