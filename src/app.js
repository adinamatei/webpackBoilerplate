const $ = require("jquery");
import Message from './js/index.js';
import Lorem from './js/message';
const css = require('./css/index.css');
import './css/app.css';
import Image from './js/image.js';
import makeRequest from './js/button.js';
import 'font-awesome/scss/font-awesome.scss';

const alertText = (txt) => {
  alert(txt);
};

console.log(Message);

const newMessage = () => Image;

const app = document.getElementById('app');
app.innerHTML = Message + newMessage();

const mes = document.querySelector('.content');
mes.innerHTML = Lorem;

$(document).ready(function(){
    $("button").click(function(){
        $.ajax({
          url: "http://localhost:3030/list",
          data: {
            username: "John",
            password: "123"
          },
          dataType: "json",
          type: 'POST',
          success: function(result) {
            console.log(result);
            alert(result.message);
          },
          error: function(error) {
            console.log('error', error);
            alert("error");
          }
        });
    });
});

