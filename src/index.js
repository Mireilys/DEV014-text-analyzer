import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textArea = document.querySelector("textarea[name='user-input']");
const textAreafuncion = function() {

  const resultado1 = analyzer.getWordCount(textArea.value);
  const wordCount = document.querySelector('.li1[data-testid="word-count"]');
  wordCount.innerHTML = "Palabras: " + resultado1;
  
  const resultado2 = analyzer.getCharacterCount(textArea.value);
  const characterCount = document.querySelector('.li2[data-testid="character-count"]');
  characterCount.innerHTML = "Caracteres: " + resultado2;
  
  const resultado3 = analyzer.getCharacterCountExcludingSpaces(textArea.value);
  const countExcludingSpaces = document.querySelector('.li3[data-testid="character-no-spaces-count"]');
  countExcludingSpaces.innerHTML = "Caracteres sin Espacios: " + resultado3;
  
  const resultado4 = analyzer.getNumberCount(textArea.value);
  const numberCount = document.querySelector('.li1[data-testid="number-count"]');
  numberCount.innerHTML = "Números: " + resultado4;
  

  const resultado5 = analyzer.getNumberSum(textArea.value);
  const numberSum = document.querySelector('.li2[data-testid="number-sum"]');
  numberSum.innerHTML = "Suma de Números: " + resultado5;
  

  const resultado6 = analyzer.getAverageWordLength(textArea.value);
  const averageWordLength = document.querySelector('.li3[data-testid="word-length-average"]');
  averageWordLength.innerHTML = "Longitud de Palabras: " + resultado6;
  
}
textArea.addEventListener("input",textAreafuncion);

const button = document.getElementById('reset-button');

button.addEventListener("click", () => {
  textArea.value = "";
  textAreafuncion ()
});










