function theBeatlesPlay(musicians, instruments) {
  var myArray = [];
  
  for (let i = 0; i < musicians.length; i++) {
    myArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  
  return myArray;
}

function johnLennonFacts(facts) {
  for (let i = 0; i < facts.length; i++) {
    facts[i] += '!!!';
  }
  
  return facts;
}