// jshint esversion:6
var $ = require("jquery");
import mesaj from './main.js';
// require('./app.css');
require('./css/index.css');
import Image from './image';
import makeRequest from './button';

const alertText = (txt) => {
  alert(txt);
};

// alertText(mesaj);

const newMessage = () => Image;

const app = document.getElementById('app');
app.innerHTML = newMessage();

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

