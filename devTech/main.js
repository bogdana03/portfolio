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
    $(selector)
}