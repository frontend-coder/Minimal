$(document).ready(function() {
	$("body").niceScroll({
horizrailenabled:false
});
$('.parallax-window').parallax({
    naturalWidth: 600,
    naturalHeight: 400
  });

// вверхнее красиво-вращающееся меню
// 1 и 2 строка это анимация крестика
//3 строка - слайдер вниз меню
$(".toggle-mnu").click(function() {
$(this).toggleClass("on");
$(".hidden-mnu").slideToggle();
return false;
});
$('body, .top-menu ul li a').click(function () {
$('.hidden-mnu').hide("slow");
});

// pagination on lending pages
$('.top-menu ul li a, .hidden-mnu ul li a').mPageScroll2id({
layout                 : "auto",
offset                 : ".top-line",
scrollEasing           : "linear",
highlightByNextTarget  : true,
keepHighlightUntilNext : true,
autoScrollSpeed        : true,
scrollSpeed            : 1000
});

// всплывающие окна обратной связи позвонить мне
$("a[href='#call-back']").magnificPopup ({
  mainClass:'mfp-fade',
  removalDelay:400,
  type:'inline',
});


/*чтобы в формах был индивидуальный заголовок */
$("a[href='#call-back']").click(function(){
  var dataForm = $(this).data("form");
  var dataText = $(this).data("text");
  $(".forms-call h4").text(dataText);
  $(".forms-call [name=admin-data]").val(dataForm);
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