// jshint esversion:6
import mesaj from './main.js';
// require('./app.css');
require('./css/index.css');
import Image from './image';

const alertText = (txt) => {
  alert(txt);
};

alertText(mesaj);

const newMessage = () => Image;

const app = document.getElementById('app');
app.innerHTML = newMessage();
