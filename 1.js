let generationTable = {
    "3": ["great grandson", "great granddaughter"],
    "2": ["grandson", "granddaughter"],
    "1": ["son", "daughter"],
    "0": ["me!", "me!"],
    "-1": ["father", "mother"],
    "-2": ["grandfather", "grandmother"],
    "-3": ["great grandfather", "great grandmother"],
  };
  function generation(numX, charY) {
      if(charY === "m"){
          console.log(generationTable[numX][0]);
      }else{
          console.log(generationTable[numX][1]);
      }
  }
  generation(2, "f");
  generation(-3, "m");
  generation(1, "f");