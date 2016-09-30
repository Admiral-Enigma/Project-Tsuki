window.onload = function () {
  var s_Noice = "TheNoise";
  createjs.Sound.registerSound("./sound/TheNOOoicse.wav",s_Noice);
};

function playSound(Id){
  createjs.Sound.play(Id);
}
