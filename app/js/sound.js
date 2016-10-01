window.onload = function () {
  console.log("fisk");
  var s_Noice = "TheNoise";
  createjs.Sound.registerSound("./sound/TheNOOoicse.wav",s_Noice);

  storage.get('sounds.json', function(error, data) {

  });
};

function playSound(Id){
  createjs.Sound.play(Id);
}
