$(function () {
  	        $("#TopNavTabs").tabs();
  	        $("#tabs1").tabs();
  	        $("#tabs2").tabs();
  	        $("#tabs3").tabs();
  	        $("#tabs4").tabs();
  	    });

  	    $(function () {
  	        var pull = $('.LeftSlideTag');
  	        menu = $('.LeftNavigationZone');
  	        menuHeight = menu.height();

  	        $('.maininnertabs').css("margin-left", "280px");

  	        $(pull).on('click', function (e) {
  	            if ($('.LeftNavigationZone').css('display') == 'none') {
  	                $('.maininnertabs').animate({ marginLeft: '280px' }, 'fast');
  	                $('.LeftSlideTag').css("background", "url(/Style Library/Images/LCTImages/Left_nav_hide_icon.jpg) no-repeat");
  	            }
  	            else {
  	                $('.maininnertabs').animate({ marginLeft: '30px' }, 'fast');
  	                $('.LeftSlideTag').css("background", "url(/Style Library/Images/LCTImages/Left_nav_show_icon.jpg) no-repeat");
  	            }
  	            e.preventDefault();
  	            menu.slideToggle('fast');
  	        });
  	    });