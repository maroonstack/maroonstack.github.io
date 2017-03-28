;(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});


})(jQuery)

$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#animate").animate({
        left: width
      }, 50000, function() {
         setTimeout(goLeft, 50);
      });
    }
    function goLeft() {
        $("#animate").animate({
        left: 0
      }, 50000, function() {
         setTimeout(goRight, 50);
      });
    }

    setTimeout(goRight, 50);
});
