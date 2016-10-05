
function addButton(id) {
  var button= document.createElement('button');
  button.type = 'button'
  button.name = id;
  button.value = id;
  button.innerHTML = id;
  button.setAttribute("class","pure-button pure-button-primary tsuki-button");
  button.onclick = function(){
    createjs.Sound.play(id);
  };
  document.body.appendChild(button);
}
var showing = false;
// TODO: Change to menu
function showAddButtonGUI(){
  if(!showing){
    //Hvis det LART
    document.getElementById('mainGui').style.display = 'block';
    showing = true;
  }else{
    //Hvis ikke det LART
    document.getElementById('mainGui').style.display = 'none';
    showing = false;
  }
}
var showingEditor = false;
function showHackMenu(){
  if(!showingEditor){
    //Hvis det LART
    document.getElementById('editor').style.display = 'block';
    showingEditor = true;
  }else{
    //Hvis ikke det LART
    document.getElementById('editor').style.display = 'none';
    showingEditor = false;
  }
}
