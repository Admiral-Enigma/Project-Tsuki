var fs = require('fs');
var text = String(fs.readFileSync('./app/css/main.css'));
window.onload = function(){
  editor.insert(text);
}
