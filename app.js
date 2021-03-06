// Etape 1 - Sélectionner nos éléments

let input = document.querySelector('#price');
let error = document.querySelector('small');
let form  = document.querySelector('#form');

// Etape 2 - Cacher l'erreur

error.style.visibility = 'hidden';

// Etape 3 - Générer un nombre aléatoire

let randomNumber = Math.floor(Math.random() * 1001);
let hit = 0;
let chosenNumber;

// Etape 6 - Créer la fonction vérifier

function check(number) {
  let instruction = document.createElement('div');
  let instructionBox = document.createElement('div');
  
  if(number < randomNumber) {
    // C'est plus
    instructionBox.textContent = '#' + hit + ' (' + number + ') ';
    instructionBox.className = 'instructionBox boxMore';
    // Flèche du haut
    instruction.textContent = '\u21e1';
    instruction.className = 'instruction more';
  }
  else if(number > randomNumber) {
    // C'est moins
    instructionBox.textContent = '#' + hit + ' (' + number + ') ';
    instructionBox.className = 'instructionBox boxLess';
    // Flèche du bas
    instruction.textContent = '\u21e3';
    instruction.className = 'instruction less';
  }
  else {
    // Félicitations
    instructionBox.textContent = '#' + hit + ' (' + number + ') You win!';
    instructionBox.className = 'instructionBox boxWin';
    instruction.textContent = 'YAY!';
    instruction.className = 'instruction win';
    // On désactive le formulaire une fois que le jeu est gagné
    input.disabled = true;
  }

  document.querySelector('#instructions').prepend(instructionBox);
  document.querySelector('#instructions').prepend(instruction);
};

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre

input.addEventListener('keyup', () => {
  if(isNaN(input.value)) {
    error.style.visibility = 'visible';
  }
  else {
    error.style.visibility = 'hidden';
  }
});

// Etape 5 - Agir à l'envoi du formulaire

form.addEventListener('submit', (e) => {
    // On bloque l'envoi par defaut du formulaire
  e.preventDefault();
  
  if(isNaN(input.value) || input.value == '') {
    input.style.borderColor = "red";
  }
  else {
    // On incrémente le nombre de coups
    hit++;
    input.style.borderColor = "silver";
    chosenNumber = input.value;
    // On vide le champ une fois la valeur validée
    input.value = '';
    check(chosenNumber);
  }
});
