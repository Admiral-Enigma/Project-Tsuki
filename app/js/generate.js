
function addButton(id) {
  var button= document.createElement('button');
  button.type = 'button'
  button.name = id;
  button.value = id;
  button.innerHTML = id;
  button.setAttribute("class","pure-button pure-button-primary");
  button.onclick = function(){
    createjs.Sound.play(id);
  };
  document.body.appendChild(button);
}
