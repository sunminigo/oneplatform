$(function () {
	sideMenu();
	slider();
	dropdown();
	tabBox();
});

sideMenu = function () {
	$('.btn_menu').click(function () {
		$('.side_menu').addClass('active');
	});
	$('.side_menu .btn_close').click(function () {
		$('.side_menu').removeClass('active');
	});
};

slider = function () {
	$('#visual_slider')
		.slick({
			lazyLoad: 'ondemand',
			autoplay: true,
			autoplaySpeed: 3000,
			infinite: true,
			dots: true,
			draggable: true,
			arrows: false,
			adaptiveHeight: true,
			centerMode: true,
			centerPadding: '66px',
			cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
		})
		.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			/* 자바스크립트
    if (currentSlide !== nextSlide) {
        document.querySelectorAll('.slick-center + .slick-cloned').forEach((next) => {
            // timeout required or Slick will overwrite the classes
            setTimeout(() => next.classList.add('slick-current', 'slick-center'));
        });
    }
    */
			// IE 호환성을 고려한 제이쿼리
			if (currentSlide !== nextSlide) {
				$('.slick-center + .slick-cloned').each(function (index, node) {
					var $node = $(node);

					setTimeout(function () {
						$node.addClass('slick-current');
						$node.addClass('slick-center');
					});
				});
			}
		});;
};

tabBox = function () {
	$('.tab_menu > ul > li').eq(0).addClass('active');
	$('.tab_content > div').hide().eq(0).show();

	$('.tab_menu > ul > li').click(function () {
		let target = $(this);
		let index = target.index();

		$('.tab_menu > ul > li').removeClass('active');
		target.addClass('active');
		$('.tab_content > div').css('display', 'none');
		$('.tab_content > div').eq(index).css('display', 'flex');
	});
};

dropdown = function () {
	$('.depth1 h2').click(function () {
		var depth2 = $(this).parents('.depth1 li').children('.depth2');

		$(this).toggleClass('active');

		if ($(this).hasClass('active')) {
			depth2.addClass('active');
			$(this)
				.find('.btn_dropdown')
				.attr('class', 'ph-caret-up-thin btn_dropdown');
		} else {
			depth2.removeClass('active');
			$(this)
				.find('.btn_dropdown')
				.attr('class', 'ph-caret-down-thin  btn_dropdown');
		}
	});
};
