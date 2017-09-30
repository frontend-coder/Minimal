$(document).ready(function() {
	$("body").niceScroll({
horizrailenabled:false
});
$('.parallax-window').parallax({
    naturalWidth: 600,
    naturalHeight: 400
  });








// pagination on lending pages
$('.top_line_nenu ul li a').mPageScroll2id({
layout                 : "auto",
offset                 : ".top_line",
scrollEasing           : "linear",
highlightByNextTarget  : true,
keepHighlightUntilNext : true,
autoScrollSpeed        : true,
scrollSpeed            : 1000
});
var $icon = $('.hamburger');
var API = $('#top_line_nenu').data('mmenu');
$icon.on( "click", function() {
   API.open();
});

API.bind( "open:finish", function() {
    $icon.addClass( "is-active" );
});

API.bind( "close:finish", function() {
 $icon.removeClass( "is-active" );
});

//Ajax push mesege http://api.jquery.com/jquery.ajax/

$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".forms-calldecor .success").addClass("active");
			setTimeout(function() {
				// Done Functions
				$(".forms-calldecor .success").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});
//castom code



});