/*1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS*/
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

/*2. RAW TEXT STRINGS*/

const storyText =  "Estava um calor de derreter as solas dos sapatos lá na vila, então decidiu sair para uma caminhada. Quando chegou à venda da Dona Florinda, ficou paralisado de terror por alguns momentos e, em seguida, começou a correr. Seu Madruga viu tudo, mas não ficou surpreso - afinal, :insertx: pesa 300 quilos, e estava um dia quente como a chaleira do Chaves.";

const insertX = ["Chaves", "Nhonho", "Seu Madruga"];
const insertY =  ["a venda da Dona Florinda", "o pátio da vila", "a escolinha do Professor Girafales"];
const insertZ = ["roubar os churros do Churrosquito", "fugir da bruxa do 71", "fazer piruetas no barril do Chaves"];

/*3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION*/

randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':insertx:', xItem); 
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Seu Madruga', name);
  }

if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Seu Madruga', name);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}