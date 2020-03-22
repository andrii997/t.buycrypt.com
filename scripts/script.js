$(document).ready(function() {

	$(".menu-futures").on("click","a", function (event) {
	        event.preventDefault();
	        var id  = $(this).attr('href'),
	            top = $(id).offset().top;
	        $('body,html').animate({scrollTop: top}, 500);
	    });


	$('.slider-tariffs').owlCarousel({
	    loop:false,
	    items:3,
	    margin:10,
	    responsiveClass:true,
	    responsive:{
	   	0:{
	   		loop:false,
	   		items:1,
	   		center:true,
	   		margin:10,
	   		stagePadding: 25,
	   		responsiveClass:true
	   	},
        580:{
		    items:1,
		    center:true,
		    stagePadding: 25
        },
        768:{
        	items:2,
        	center:false,
        	stagePadding: 25
        },
        1024:{
        	items:3,
        	center:false,
        	stagePadding: 0
        }
    }
	})


	$('.open-api-key').magnificPopup({
		type: 'inline'
	});

	$('.payment-method').magnificPopup({
		type: 'inline'
	});

	$(".accordion .set > .head").on("click", function(){
	  if($(this).hasClass('active')){
	  	$(this).removeClass("active");
	    $(this).siblings('.text').slideUp(200);
	    $(".accordion .set > .head i").removeClass("fa-minus").addClass("fa-plus");
	  }else{
	    $(".accordion .set > .head i").removeClass("fa-minus").addClass("fa-plus");
	  $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
	  $(".accordion .set > .head").removeClass("active");
	  $(this).addClass("active");
	  $('.accordion .text').slideUp(200);
	  $(this).siblings('.text').slideDown(200);
	  }
	});

	$('.slider-videoLessons').owlCarousel({
	    responsive:{
	    0:{
            loop:false,
		    items:1,
		    autoWidth:true,
		    center:true,
		    margin:15,
		    stagePadding: 30,
		    responsiveClass:true
	    },
        580:{
            loop:false,
		    items:1,
		    autoWidth:true,
		    center:true,
		    margin:15,
		    stagePadding: 30,
		    responsiveClass:true
        },
        768:{
        	items: 3,
        	margin:15
        }
    }
	})

});

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}



jQuery(window).scroll(function(){
         var $sections = $('section');
	$sections.each(function(i,el){
        var top  = $(el).offset().top-100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
    	if( scroll > top && scroll < bottom){
            $('a.active').removeClass('active');
			$('a[href="#'+id+'"]').addClass('active');

        }
    })
 });

