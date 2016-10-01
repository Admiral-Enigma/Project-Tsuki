const storage = require('electron-json-storage');
window.onload = function () {
  console.log("fisk");
  var s_Noice = "TheNoise";
  createjs.Sound.registerSound("./sound/TheNOOoicse.wav",s_Noice);

  if (error) throw error;

  console.log(data);
};

function playSound(Id){
  createjs.Sound.play(Id);
}
