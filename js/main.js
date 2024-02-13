
$('.menuBtn').click(function(){
    $('#gnb').animate({right:0}, 300, 'swing');
    $('.dark').fadeIn(300)
    $('body').css({overflow:'hidden'})
  })
  $('.close, .dark').click(function(){
    $('#gnb').animate({right:'-100%'}, 300, 'swing');
    $('.dark').fadeOut(200)
    $('body').css({overflow:'auto'})
  })

  $('.search').click(function(){
    $('.keyboard img').animate({bottom:'-50%'}, 300, 'swing');
  })
  

  $('search_close').click(function(){
    
    
    


    $('.keyboard img').animate({bottom:'-100%'}, 300, 'swing');
  })
 