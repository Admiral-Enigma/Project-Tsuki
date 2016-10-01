const storage = require('electron-json-storage');

function playSound(Id){
  createjs.Sound.play(Id);
}

function addSound(path, Id) {
  createjs.Sound.registerSound(path,id);
}

//Json sound loader
var sounds = JSON.parse("sounds.json");

window.onload = function () {
  for (i in sounds) {
    addSound(sounds[i].path, sounds[i].id);
    console.log(i);
  }
};


var s_Noice = "TheNoise";
createjs.Sound.registerSound("./sound/TheNOOoicse.wav",s_Noice);
