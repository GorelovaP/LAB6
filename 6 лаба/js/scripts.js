let btn1 =$('#btn1');

btn1.click(function (){
   $('.class1 #1,.class3 #1,.class5 #1').attr('id','idNew').next("h1").replaceWith("<h6>Новый заголовок h6</h6>");
})



$('#btn2').click(function (){
    $('.class2 p,.class4 p,.class6 p').fadeOut(1000);
    $('.class2 img,.class4 img,.class6 img').fadeIn(5000);
    btn1.attr('disabled', true);
})