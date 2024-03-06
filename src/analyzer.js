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
    let contadorCaracteres = 0;
    for (let i = 0; i < text.length; i++) {
      const chart = text[i];
      if (chart !== ' ' && !['.', ',', '!'].includes(chart)) {
        contadorCaracteres++; 
      }
    }
    return contadorCaracteres;
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    if (!text.trim()) {
      return 0;
    }
    if (text[text.length - 1] === ".") {
      text = text.substring(0, text.length - 1);
    }
    const palabras = text.split(" ");
    let contar = 0;
    for (let i = 0; i < palabras.length; i++) {
      const numero = parseFloat(palabras[i]); 
      while (palabras[i].endsWith("0")) {
        palabras[i] = palabras[i].substring(0, palabras[i].length - 1); 
      }
      if (!isNaN(numero) && palabras[i] === numero.toString()) {
        contar++;
      }
    }
    return contar;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    if (!text.trim()) {
      return 0;
    }
    if (text[text.length - 1] === ".") {
      text = text.substring(0, text.length - 1);
    }
    const palabras = text.split(" ");
    let contar = 0;
    for (let i = 0; i < palabras.length; i++) {
      const numero = parseFloat(palabras[i]); 
      while (palabras[i].endsWith("0")) {
        palabras[i] = palabras[i].substring(0, palabras[i].length - 1);
      }
      if (!isNaN(numero) && palabras[i] === numero.toString()) {
        contar = contar + numero;
      }
    }
    return contar;
  },

  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const texto = text.trim(); 
    const palabras = texto.split(" "); 

    let long = 0;
    palabras.forEach(function (word) { 
      long = long + word.length;
    });
    return Number((long / palabras.length).toFixed(2));
  },
};

export default analyzer;
