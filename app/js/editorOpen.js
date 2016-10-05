
const remote = require('electron').remote
const main = remote.require('./main.js')

var button= document.createElement('button');
  button.type = 'button'
  button.name = 'hack';
  button.value = 'hack';
  button.innerHTML = 'Customize';
  button.setAttribute("class","tsuki-hack-button tsuki-succes");
  button.onclick = function(){
    main.openEditor()
  };
document.body.appendChild(button);
