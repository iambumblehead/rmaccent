// Filename: rmaccent.js
// Timestamp: 2013.10.27-11:03:32 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)


var rmaccent = ((typeof module === 'object') ? module : {}).exports = function (str) {
  var charRe = /À|Á|Â|Ã|Ä|Å|Æ|Ç|È|É|Ê|Ë|Ì|Í|Î|Ï|Ð|Ñ|Ò|Ó|Ô|Õ|Ö|Ø|Ù|Ú|Û|Ü|Ý|ß|à|á|â|ã|ä|å|æ|ç|è|é|ê|ë|ì|í|î|ï|ð|ñ|ò|ó|ô|õ|ö|ø|ù|ú|û|ü|ý|ÿ|Ĳ|ĳ|Š|š|Ž|ž|Œ|œ|Ő|ő|Ű|ű|Ḃ|ḃ|Ċ|ċ|Ḋ|ḋ|Ḟ|ḟ|Ġ|ġ|Ṁ|ṁ|Ṡ|ṡ|Ṫ|ṫ|Ā|ā|Ē|ē|Ī|ī|Ō|ō|Ū|ū|İ|ı|Ğ|ğ|Ş|ş|Ẁ|ẁ|Ẃ|ẃ|Ŵ|ŵ|Ŷ|ŷ|ł|ń|ż|ź|ć|ą|ś|ę|Ł|Ń|Ż|Ź|Ć|Ą|Ś|Ę/g;

  if (typeof str !== 'string') throw new Error('must be a string');

  return str.replace(charRe, function (match) {
    switch (match) {
      case "À" : return "A";
      case "Á" : return "A";
      case "Â" : return "A";
      case "Ã" : return "A";
      case "Ä" : return "A";
      case "Å" : return "A";
      case "Æ" : return "E";
      case "Ç" : return "C";
      case "È" : return "E";
      case "É" : return "E";
      case "Ê" : return "E";
      case "Ë" : return "E";
      case "Ì" : return "I";
      case "Í" : return "I";
      case "Î" : return "I";
      case "Ï" : return "I";
      case "Ð" : return "D";
      case "Ñ" : return "N";
      case "Ò" : return "O";
      case "Ó" : return "O";
      case "Ô" : return "O";
      case "Õ" : return "O";
      case "Ö" : return "O";
      case "Ø" : return "O";
      case "Ù" : return "U";
      case "Ú" : return "U";
      case "Û" : return "U";
      case "Ü" : return "U";
      case "Ý" : return "Y";
      case "ß" : return "SS";
      case "à" : return "a";
      case "á" : return "a";
      case "â" : return "a";
      case "ã" : return "a";
      case "ä" : return "a";
      case "å" : return "a";
      case "æ" : return "ae";
      case "ç" : return "c";
      case "è" : return "e";
      case "é" : return "e";
      case "ê" : return "e";
      case "ë" : return "e";
      case "ì" : return "i";
      case "í" : return "i";
      case "î" : return "i";
      case "ï" : return "i";
      case "ð" : return "d";
      case "ñ" : return "n";
      case "ò" : return "o";
      case "ó" : return "o";
      case "ô" : return "o";
      case "õ" : return "o";
      case "ö" : return "o";
      case "ø" : return "o";
      case "ù" : return "u";
      case "ú" : return "u";
      case "û" : return "u";
      case "ü" : return "u";
      case "ý" : return "y";
      case "ÿ" : return "y";
      case "Ĳ" : return "IJ";
      case "ĳ" : return "ij";
      case "Š" : return "Sh";
      case "š" : return "sh";
      case "Ž" : return "Zh";
      case "ž" : return "zh";
      case "Œ" : return "OE";
      case "œ" : return "oe";
      case "Ő" : return "O";
      case "ő" : return "o";
      case "Ű" : return "U";
      case "ű" : return "u";
      case "Ḃ" : return "Bh";
      case "ḃ" : return "bh";
      case "Ċ" : return "Ch";
      case "ċ" : return "ch";
      case "Ḋ" : return "Dh";
      case "ḋ" : return "dh";
      case "Ḟ" : return "Fh";
      case "ḟ" : return "fh";
      case "Ġ" : return "Gh";
      case "ġ" : return "gh";
      case "Ṁ" : return "Mh";
      case "ṁ" : return "mh";
      case "Ṡ" : return "Sh";
      case "ṡ" : return "sh";
      case "Ṫ" : return "Th";
      case "ṫ" : return "th";
      case "Ā" : return "A";
      case "ā" : return "a";
      case "Ē" : return "E";
      case "ē" : return "e";
      case "Ī" : return "I";
      case "ī" : return "i";
      case "Ō" : return "O";
      case "ō" : return "o";
      case "Ū" : return "U";
      case "ū" : return "u";
      case "İ" : return "I";
      case "ı" : return "i";
      case "Ğ" : return "G";
      case "ğ" : return "g";
      case "Ş" : return "S";
      case "ş" : return "s";
      case "Ẁ" : return "W";
      case "ẁ" : return "w";
      case "Ẃ" : return "W";
      case "ẃ" : return "w";
      case "Ŵ" : return "W";
      case "ŵ" : return "w";
      case "Ŷ" : return "Y";
      case "ŷ" : return "y";
      case "ł" : return "l";
      case "ń" : return "n";
      case "ż" : return "z";
      case "ź" : return "z";
      case "ć" : return "c";
      case "ą" : return "a";
      case "ś" : return "s";
      case "ę" : return "e";
      case "Ł" : return "L";
      case "Ń" : return "N";
      case "Ż" : return "Z";
      case "Ź" : return "Z";
      case "Ć" : return "C";
      case "Ą" : return "A";
      case "Ś" : return "S";
      case "Ę" : return "E";
      default : return '';
    }
  });
};

