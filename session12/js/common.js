
$(function(){
  //hieu ung ben phai
  $("#registerform").progression({
    tooltipWidth: '200',
    tooltipPosition: 'right',
    tooltipOffset: '0',
    showProgressBar: false,
    showHelper: true,
    tooltipFontSize: '14',
    tooltipFontColor: 'fff',
    progressBarBackground: 'fff',
    progressBarColor: '7ea2de',
    tooltipBackgroundColor: 'a5bce5',
    tooltipPadding: '7',
    tooltipAnimate: true
  }).submit(function(e){
    e.preventDefault();
  });
  
  $('#username').on('blur', function(){
    var currval = $(this).val();
    
    if(currval.length < 6) {
      $(this).next('.errmsg').slideDown();
    } else {
      // the username is 6 or more characters and we hide the error
      $(this).next('.errmsg').slideUp();
    }
  });
  
  $('#email').on('blur', function(){
    
    var mailval = $(this).val();
    
    if(mailval.length < 1) {
      $(this).next('.errmsg').slideDown();
    } else {
      $(this).next('.errmsg').slideUp();
    }
  });
  $('#sex').on('blur', function(){
    var sex = $(this).val();
    
    if(sex.length < 1) {
      $(this).next('.errmsg').slideDown();
    } else {
      // the sex is 1 or more characters and we hide the error
      $(this).next('.errmsg').slideUp();
    }
  });
  
  $('#phone').on('blur', function(){
  
    var phone = $(this).val();
    
    if(phone.length < 1) {
      $(this).next('.errmsg').slideDown();
    }else {
      // the phone is 1 or more characters and we hide the error
      $(this).next('.errmsg').slideUp();
    }

  });
  $('#day').on('blur', function(){
    var day = $(this).val();
    
    if(day.length < 1) {
      $(this).next('.errmsg').slideDown();
    } else {
      // the day is 1 or more characters and we hide the error
      $(this).next('.errmsg').slideUp();
    }
  });

});
