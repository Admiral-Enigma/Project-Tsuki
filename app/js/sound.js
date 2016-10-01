var fs = require('fs');
const {shell} = require('electron')
var sounds = JSON.parse(fs.readFileSync('./app/js/sounds.json', 'utf8'));


function playSound(Id){
  createjs.Sound.play(Id);
}
try {
  for(var i = 0; i < sounds.sounds.length; i++){
    //registerSound(sounds.sounds[i].path, sounds.sounds[i].id);
    createjs.Sound.registerSound(sounds.sounds[i].path, sounds.sounds[i].id);

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
    addButton(sounds.sounds[i].id);
    console.log(sounds.sounds[i].path, sounds.sounds[i].id);
    console.log("YES");
  }
} catch (e) {
  console.log(e);
}
