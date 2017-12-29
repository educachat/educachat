const { ipcRenderer, shell } = require('electron');
const process = require('process');

let linkFechar = document.querySelector('#link-fechar');
let linkTwitter = document.querySelector('#link-twitter');
let versaoElectron = document.querySelector('#versao-electron');

window.onload = () => {
  versaoElectron.textContent = process.versions.electron;
}

linkFechar.addEventListener('click', () => {
  ipcRenderer.send('fechar-janela-sobre');
});

linkTwitter.addEventListener('click', () => {
  shell.openExternal('https://twitter.com/euconectei');
});

