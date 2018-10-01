function getHTML (options, callback) {

  /* Add your code here */
  var output = "";
  var https = require('https');
  var requestedOptions = options;

  /* Add your code here */
  https.get(requestedOptions, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    output += data;
    callback(output);
  });
});

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);