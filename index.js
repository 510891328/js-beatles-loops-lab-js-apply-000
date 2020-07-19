// add solution here

function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for(var i = 0; i < musicians.length; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

function johnLennonFacts(){
  var count = 0
  while(facts !== null){
    facts[count] = facts[count] + '!!!'
    count++
  }
  return facts
}