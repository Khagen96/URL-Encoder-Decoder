const readLineSync = require('readline-sync')
console.clear();


function urlEncode(url) {
  return encodeURIComponent(url);
}

function urlDecode(url) {
  var encoded = encodeURIComponent(url);
  var decoded = decodeURIComponent(encoded);
  return decoded;
}
const utilityOption = parseInt(readLineSync.question('Welcome to URL Encoder/Decoder. \nWhich utility function would you like to use?\n1. URL Encoder\n2. URL Decoder\n'));

if(utilityOption===1){
    const urlToEncode = readLineSync.question('\nPlease enter the url to be encoded\n');
    const encodedURL = urlEncode(urlToEncode);
    console.log("\nYour encoded URL is:\n"+ encodedURL);
}
else if(utilityOption===2){
    const urlToDecode = readLineSync.question('\nPlease enter the url to be decoded\n');
    const decodedURL = urlDecode(urlToDecode);
    console.log("\nYour decoded URL is:\n"+decodedURL);
}
else{
    console.log('Invalid option\n');
}
