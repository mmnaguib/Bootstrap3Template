/*global $ */

$(function () {
	'use strict';
	$('html').niceScroll({
		cursorcolor: '#e41b17'
	});
	
	$('.carousel').carousel({
		interval: 5000
	});
	
	/*********************************************/
	$('.gear-cheak').click(function () {
		$('.color-option').fadeToggle();
	
		var colorLi = $('.color-option ul li');
	
		colorLi
			.eq(0).css("backgroundColor", "#e41b17").end()
			.eq(1).css("backgroundColor", "#e426d5").end()
			.eq(2).css("backgroundColor", "#009aff").end()
			.eq(3).css("backgroundColor", "#ffd500");
	
		colorLi.click(function () {
			$("link[href*='theme']").attr("href", $(this).attr('data-value'));
		});
	});

/*********************************************/


/********************************************/
	var scrollBtn = $('#scroll-to-top');
	$(window).on('scroll', function () {
		if ($(this).scrollTop() >= 700) {
			scrollBtn.show();
		} else {
			scrollBtn.hide();
		}
	});


	scrollBtn.click(function () {
		$('html,body').animate({scrollTop: 0}, 600);
	});


/*******************************************/
	
	$(window).on('load', function () {
		$('.loading-overlay .spinner').fadeOut(1000, function () {
			$('body').css('overflow', 'auto');
			$(this).parent().fadeOut(2000, function () {
				$(this).remove();
			});
		});
	});
/*******************************************/
	
});


