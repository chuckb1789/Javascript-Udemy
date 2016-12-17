var names = ['chris', 'sean', 'raine'];

console.log ( names.join (', '));

var capitalizeNames = function (inputNames) {
  var outputNames = [];
  for (var i = 0; i < inputNames.length; i++) {
    var firstletter = inputNames[i][0];
    var rest = inputNames[i].slice(1);
    outputNames.push (firstletter.toUpperCase() + rest);
  }
  return outputNames;
}
console.log ( capitalizeNames(names).join(', ') );

var capitalizeNames = names.map(function(item){
  console.log ( item );
  var firstLetter = item[0];
  var rest = item.slice(1);
  return firstLetter.toUpperCase() + rest;
});

console.log ( capitalizeNames );
