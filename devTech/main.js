/**Sticky Navigation */ 

let navbar= $(".navbar");

/**scroll for the window*/ 
$(window).scroll(function(){
    let oTop = $(".section-2").offset().top-window.innerHeight;
    console.log(oTop);
    if($(window).scrollTop()>oTop){
       navbar.addClass("sticky");
    }else{
     navbar.removeClass("sticky");
    }
});

/**Counter Animation */

let nCount = function(selector){
  $(selector).each(function(){
    
    $(this).animate({
      Counter:$(this).text()
    },{
      duration:4000,
      easing:"swing",
      step:function(value){
        $(this).text(Math.ceil(value));
      }
     }
    );
  });
};

/**Scroll for animated*/
let a = 0;
$(window).scroll(function(){
  let oTop = $(".numbers").offset().top-window.innerHeight;
  if(a == 0 && $(window).scrollTop() >= oTop){
    a++;
    nCount(".rectang>h1");
  }
})
    
