import {pageLoad} from './page_load.js'
import {menuLoad} from './menu.js'
import {contactLoad} from './contacts.js'

pageLoad();

let mainButton = document.querySelector('#main');
mainButton.addEventListener('click', function(e){
  const content = document.querySelector("#content");
  content.innerHTML = "";
  pageLoad();
})

let menuButton = document.querySelector('#menu');
menuButton.addEventListener('click', function(e){
  const content = document.querySelector("#content");
  content.innerHTML = "";
  menuLoad();
})

let contactButton = document.querySelector('#contact');
contactButton.addEventListener('click', function(e){
  const content = document.querySelector("#content");
  content.innerHTML = "";
  contactLoad();
})
