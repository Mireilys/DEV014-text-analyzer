const analyzer = {

  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const palabra = text.split(" ");
    let contadorpalabra = 0;
    for (let i = 0; i < palabra.length; i++) {
      if (palabra[i] !== "") {
        contadorpalabra++;
      }
    }
    return contadorpalabra;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    text = text.trim();
    return text.length; 
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    text = text.trim();
    let characterCount = 0;
    for (let i = 0; i < text.length; i++) {
      const chart = text[i];
      if (chart !== ' ' && !['.', ',', '!'].includes(chart)) {
        characterCount++; 
      }
    }
    return characterCount;
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    if (!text.trim()) {
      return 0;
    }
    if (text[text.length - 1] === ".") {
      text = text.substring(0, text.length - 1);
    }
    const words = text.split(" ");
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      const numero = parseFloat(words[i]); 
      while (words[i].endsWith("0")) {
        words[i] = words[i].substring(0, words[i].length - 1); 
      }
      if (!isNaN(numero) && words[i] === numero.toString()) {
        count++;
      }
    }
    return count;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    if (!text.trim()) {
      return 0;
    }
    if (text[text.length - 1] === ".") {
      text = text.substring(0, text.length - 1);
    }
    const words = text.split(" ");
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      const numero = parseFloat(words[i]); 
      while (words[i].endsWith("0")) {
        words[i] = words[i].substring(0, words[i].length - 1);
      }
      if (!isNaN(numero) && words[i] === numero.toString()) {
        count = count + numero;
      }
    }
    return count;
  },

  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const txt = text.trim(); 
    const words = txt.split(" "); 

    let long = 0;
    words.forEach(function (word) { 
      long = long + word.length;
    });
    return Number((long / words.length).toFixed(2));
  },
};

export default analyzer;
