let elList = document.querySelector('.menu__cards');

for(let pokemon of pokemons){

// CREATE
let newCard = document.createElement('div');
let newPhoto = document.createElement('div');
let newImage = document.createElement('img');
let newDesc = document.createElement('div');
let newDescTitle = document.createElement('h2');
let newDescSubtitle = document.createElement('p');
let newDescList = document.createElement('ul');
let newDescItem = document.createElement('li');
let newDescWeight = document.createElement('p');
let newDescHeight = document.createElement('p');

// SET ATTRIBUTE
newCard.setAttribute('class', 'card');
newPhoto.setAttribute('class', 'card__photo');
newImage.setAttribute('src',pokemon.img);
newDesc.setAttribute('class', 'card__desc');
newDescTitle.setAttribute('class', 'card__title');
newDescSubtitle.setAttribute('class', 'card__subtitle');
newDescList.setAttribute('class', 'card__list');
newDescItem.setAttribute('class', 'card__item');
newDescWeight.setAttribute('class', 'card__text-kg');
newDescHeight.setAttribute('class', 'card__text-height');

//TEXT CONTENT
newDescTitle.textContent = pokemon.name;
newDescSubtitle.textContent = pokemon.type;
newDescWeight.textContent = pokemon.weight;
newDescHeight.textContent = pokemon.height;

//APPEND CHILD
elList.appendChild(newCard);
newCard.appendChild(newPhoto);
newPhoto.appendChild(newImage);
newCard.appendChild(newDesc);
newDesc.appendChild(newDescTitle);
newDesc.appendChild(newDescSubtitle);
newDesc.appendChild(newDescList);
newDescList.appendChild(newDescItem);
newDescItem.appendChild(newDescWeight);
newDescItem.appendChild(newDescHeight);
}


