var fs = require('fs');
var sounds = JSON.parse(fs.readFileSync('./app/js/sounds.json', 'utf8'));
//var s_Noice = "TheNoise";
//createjs.Sound.registerSound("./sound/TheNOOoicse.wav",s_Noice);

function playSound(Id){
  createjs.Sound.play(Id);
}

function registerSound(id, path){
  createjs.Sound.registerSound(path,id);
}
console.log(sounds.length);
try {
  for(var i = 0; i < 20; i++){
    //registerSound(sounds.sounds[i].path, sounds.sounds[i].id);
    createjs.Sound.registerSound(sounds.sounds[i].path, sounds.sounds[i].id);
    console.log(sounds.sounds[i].path, sounds.sounds[i].id);
    console.log("YES");
  }
} catch (e) {
  console.log(e);
}

/**try {
  console.log(sounds.sounds[0].id + sounds.sounds[0].path);

} catch (e) {
    console.log(e);
}**/
