var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverseCase (html) {
  var finalString = "";
  for (var i = html.length; i >= 0; i --){
    finalString += html.charAt(i);
  }
  console.log(finalString);
}

getHTML(requestOptions,printReverseCase);