const Message = "<h1>Webpack is awesome!</h1>";

$('h1').on("click", function(){
  $(this).css('color', 'purple');
});

export default Message;