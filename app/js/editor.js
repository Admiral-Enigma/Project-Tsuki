var fs = require('fs');
var text = String(fs.readFileSync('./app/css/main.css'));

window.onload = function(){
  editor.insert(text);
  editor.resize();
  console.log(editor.getSession().getValue());
  editor.commands.addCommand({
      name: 'save',
      bindKey: {win: 'Ctrl-S',  mac: 'Command-S'},
      exec: function(editor) {
        fs.writeFile("./app/css/main.css", editor.getSession().getValue(), function(err) {
            if(err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        });
      },
      readOnly: true
  });
}
editor.getSession().on('change', function(e) {
    // e.type, etc
    console.log('Hey');
});
