$(document).ready(function(){

    		wi = window.innerWidth;  //initial width of the device

    		if(wi>1200){
    				$('.cover').css('background-image', 'url(images/cover_green.png)');
            $('.cover').css('height','90%');

    				$('.slogan').removeClass('display-5')
                        .removeClass('display-6')
                        .removeClass('display-7')
                        .removeClass('display-8')
                        .addClass('display-4');

    				$('.tagline').removeClass('h3')
                         .removeClass('h5')
                         .removeClass('h6')
                         .removeClass('h7')
                         .addClass('h2');

            $('.journey').removeClass('btn-sm')
                          .removeClass('p-1')
                          .addClass('p-3');
    			}

    		else if(wi<=1200 && wi>=1000){
    				$('.cover').css('background-image', 'url(images/cover_green.png)');
            $('.cover').css('height','80%');


    				$('.slogan').removeClass('display-4')
                        .removeClass('display-6')
                        .removeClass('display-7')
                        .removeClass('display-8')
    							      .addClass('display-5');

    				$('.tagline').removeClass('h2')
                         .removeClass('h5')
                         .removeClass('h6')
                         .removeClass('h7')
                         .addClass('h3');

            $('.journey').removeClass('btn-sm')
                          .removeClass('p-1')
                          .addClass('p-3');
    				}

    			else if(wi<1000 && wi>=600){
    				$('.cover').css('background-image', 'url(images/cover_green.png)');
            $('.cover').css('height','80%');


    				$('.slogan').removeClass('display-4')
    							      .removeClass('display-5')
                        .removeClass('display-7')
                        .removeClass('display-8')
    							      .addClass('display-6');

    				$('.tagline').removeClass('h2')
                         .removeClass('h3')
                         .removeClass('h6')
                         .removeClass('h7')
                         .addClass('h5');

            $('.journey').removeClass('btn-sm')
                          .removeClass('p-1')
                          .addClass('p-3');
    				}

    			else if(wi<600 && wi>=350){
    				$('.cover').css('background-image', 'url(images/cover_green_mobile.png)');
            $('.cover').css('height','50%');
            $('.cover-text').removeClass('ml-3');

             $('.slogan').removeClass('display-4')
                         .removeClass('display-5')
                         .removeClass('display-6')
                         .removeClass('display-8')
                         .addClass('display-7');


             $('.tagline').removeClass('h2')
                          .removeClass('h3')
                          .removeClass('h5')
                          .removeClass('h7')
                          .addClass('h6');

             $('.journey').addClass('btn-sm')
                          .removeClass('p-1')
                          .addClass('p-3');
            }

           else if(wi<350){
            $('.cover').css('background-image', 'url(images/cover_green_mobile.png)');
            $('.cover').css('height','50%');

             $('.slogan').removeClass('display-4')
                         .removeClass('display-5')
                         .removeClass('display-6')
                         .removeClass('display-7')
                         .addClass('display-8');


             $('.tagline').removeClass('h2')
                          .removeClass('h3')
                          .removeClass('h5')
                          .removeClass('h6')
                          .addClass('h7');

              $('.journey').removeClass('p-3')
                           .removeClass('ml-3')
                           .addClass('p-1')
                           .addClass('btn-sm');
            }
    	    		
    		 	$(window).resize(function(){
    			w = window.innerWidth;   // width of the device on resize

    			if(w>1200){
    				$('.cover').css('background-image', 'url(images/cover_green.png)');
            $('.cover').css('height','90%');

    				$('.slogan').removeClass('display-5')
    							      .removeClass('display-6')
                        .removeClass('display-7')
                        .removeClass('display-8')
    							      .addClass('display-4');
            
            $('.tagline').removeClass('h3')
                         .removeClass('h5')
                         .removeClass('h6')
                         .removeClass('h7')
                         .addClass('h2');

            $('.journey').removeClass('btn-sm')
                          .removeClass('p-1')
                          .addClass('p-3');
    			}

    		else if(w<=1200 && w>=1000){
    				$('.cover').css('background-image', 'url(images/cover_green.png)');
            $('.cover').css('height','80%');

    				$('.slogan').removeClass('display-4')
    							      .removeClass('display-6')
                        .removeClass('display-7')
                        .removeClass('display-8')
    							      .addClass('display-5');

    				$('.tagline').removeClass('h2')
                         .removeClass('h5')
                         .removeClass('h6')
                         .removeClass('h7')
                         .addClass('h3');

            $('.journey').removeClass('btn-sm')
                          .removeClass('p-1')
                          .addClass('p-3');
    				}

    			else if(w<1000 && w>=600){
    				$('.cover').css('background-image', 'url(images/cover_green.png)');
            $('.cover').css('height','80%');

    				$('.slogan').removeClass('display-4')
    							      .removeClass('display-5')
                        .removeClass('display-7')
                        .removeClass('display-8')
    							      .addClass('display-6');

    				$('.tagline').removeClass('h2')
                         .removeClass('h3')
                         .removeClass('h6')
                         .removeClass('h7')
                         .addClass('h5');

            $('.journey').removeClass('btn-sm')
                          .removeClass('p-1')
                          .addClass('p-3');
    				}

    			else if(w<600 && w>=350){
    				$('.cover').css('background-image', 'url(images/cover_green_mobile.png)');
            $('.cover').css('height','60%');

            $('.slogan').removeClass('display-4')
                        .removeClass('display-5')
                        .removeClass('display-6')
                        .removeClass('display-8')
                        .addClass('display-7');

            $('.tagline').removeClass('h2')
                          .removeClass('h3')
                          .removeClass('h5')
                          .removeClass('h7')
                          .addClass('h6');
            $('.journey').removeClass('btn-sm')
                          .removeClass('p-1')
                          .addClass('p-3');
    			}


           else if(w<350){
            $('.cover').css('background-image', 'url(images/cover_green_mobile.png)');
            $('.cover').css('height','50%');

             $('.slogan').removeClass('display-4')
                         .removeClass('display-5')
                         .removeClass('display-6')
                         .removeClass('display-7')
                         .addClass('display-8');


             $('.tagline').removeClass('h2')
                          .removeClass('h3')
                          .removeClass('h5')
                          .removeClass('h6')
                          .addClass('h7');

              $('.journey').removeClass('p-3')
                           .addClass('p-1')
                           .addClass('btn-sm');

            }	
    		});
    	});