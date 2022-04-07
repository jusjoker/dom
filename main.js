const main = document.querySelector('main')
var joke1 = 'What did the buffalo say to his son? Bison.'
var joke2 = 'What do you call a woman with one leg short than the other? Ilene.'
var joke3 = 'What kind of streets do ghosts haunt? Dead ends.'

const li = document.querySelector('.list-item1');
const li2 = document.querySelector('.list-item2');
const li3 = document.querySelector('.list-item3');

li.textContent = joke1
li2.textContent = joke2
li3.textContent = joke3

var body = document.body;
var para = document.createElement('p');
para.textContent = "That's all folks!";
body.appendChild(para);

