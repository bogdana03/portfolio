/**Sticky Navigation */ 

let navbar= $(".navbar");

/**scroll for the window*/ 
$(window).scroll(function(){
    let oTop = $(".section-2").offset().top-window.innerHeight;
    console.log(oTop);
});