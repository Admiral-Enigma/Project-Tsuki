var fs = require('fs');
var text = String(fs.readFileSync('./css/main.css'));
var saved = true;
window.onload = function(){
  editor.insert(text);
  editor.resize();
  console.log(editor.getSession().getValue());
  editor.commands.addCommand({
      name: 'save',
      bindKey: {win: 'Ctrl-S',  mac: 'Command-S'},
      exec: function(editor) {
        fs.writeFile("./resources/app/app/css/main.css", editor.getSession().getValue(), function(err) {
            if(err) {
                return console.log(err);
            }
            saved = true;
            document.getElementById('title').innerHTML = 'Tsuki Customize';
            console.log("The file was saved!");
        });
      },
      readOnly: true
  });
}
editor.getSession().on('change', function(e) {
    // e.type, etc
    if(saved){
      saved = false;
      document.getElementById('title').innerHTML = 'Tsuki Customize NOT SAVED';
    }
});
