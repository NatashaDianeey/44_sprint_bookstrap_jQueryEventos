$(document).ready(function(){

    $("#bkg-imag").on( "click", function() {	 
        $('#target').toggle('slow');
         });
   

	$(function() {
		$('.img').hover(
			function(){
				var $this = $(this);
				$this.stop().animate({
						'opacity':'1.0',
						'height':'250px',
						'top':'0px',
						'left':'0px'
					});
			},
			function(){
				var $this = $(this);
				$this.stop().animate({
					'opacity':'4.0',
					'height':'300px',
					'top':'-30px',
					'left':'-150px'
					});
			}
		);
	});

	$('#bak').click(function() {
		$('#img2').toggle(1000, function() {
		      });
		});

	 $("#about").click(function () {
            $('.bye').toggle("slow");
        });

	$('input').mouseenter(function () {

        $('input').animate({'opacity':'2.0', 

        });

	});
	$('input').mouseleave(function () {

        $('input').animate({'opacity':'0.5', 

        });

	});
});

