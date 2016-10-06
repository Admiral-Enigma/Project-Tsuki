var fs = require('fs');
var jsonfile = require('jsonfile');
const {shell} = require('electron')

var soundsFile = fs.readFileSync('./app/js/sounds.json', 'utf8');
var sounds = JSON.parse(soundsFile);
var json = "./app/js/sounds.json";


function playSound(Id){
  createjs.Sound.play(Id);
}
function loadSoundToJson(id, path){
  var data = {id:id, path:path};
  sounds.sounds.push(data);
  var soundsJSON = JSON.stringify(sounds);
  fs.writeFileSync(json, soundsJSON);
}

function removeSoundFromJson(Id) {
  console.log(Id);
  try {
    for (var i = 0; i < sounds.sounds.length; i++) {
      if(sounds.sounds[i].id == Id){
        console.log('found it!');
        sounds.sounds.splice(i, 1)
        console.log('Stuff');
        var newSoundsJSON = JSON.stringify(sounds);
        fs.writeFileSync(json, newSoundsJSON);
      }
    }
  } catch (e) {
    console.log(e);
  } finally {

  }

}

jsonfile.readFile(json, function(err, obj) {
  try {
    for(var i = 0; i < obj.sounds.length; i++){
      //registerSound(sounds.sounds[i].path, sounds.sounds[i].id);
      createjs.Sound.registerSound(obj.sounds[i].path, obj.sounds[i].id);

      //var id = sounds.sounds[i].id;
      /**var btn = document.createElement('button');
      btn.innerHTML = sounds.sounds[i].id;
      btn.class = "pure-button pure-button-primary";
      btn.onclick = playSound(sounds.sounds[i].id);**/

      /**var button= document.createElement('button');
      button.type = 'button'
      button.name = sounds.sounds[i].id;
      button.value = sounds.sounds[i].id;
      button.class = "pure-button pure-button-primary";
      button.onclick = function(){
        createjs.Sound.play(sounds.sounds[i].id);
      };
      document.body.appendChild(button);**/
      addButton(obj.sounds[i].id);
      console.log(obj.sounds[i].path, obj.sounds[i].id);
      console.log("YES");
    }
  } catch (e) {
    console.log(e);
  }
});
