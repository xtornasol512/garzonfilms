$(document).foundation();
if( location.href == "http://garzonfilms.com" || location.href == "http://www.garzonfilms.com" || location.href == "http://localhost:8080/")
{
    randomImg();
}
animationHover('#logo', 'bounceIn');
function animationHover(element, animation){
  element = $(element);
  element.hover(
    function() {
      element.addClass('animated ' + animation);
    },
    function(){
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
        element.removeClass('animated ' + animation);
      }, 2000);
    }
  );
};
$(".various")
        .fancybox({
          padding : 0
      });

