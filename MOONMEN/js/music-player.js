$(document).ready(function(){

	let play = $('#play');
	let pause = $('#pause');
	let stop = $('#stop');	

	$('.stream-music').click(function(){
		let mediaArt = $(this).parent().prev().attr("src");
		let mediaTitle = $(this).siblings('h4').text();
		let mediaArtist = $(this).siblings('p').text();
		let songId = $(this).attr('id');

		
		$('.music-player').fadeIn()
						  .removeClass('invisible');

		$('#media-art').attr("src",mediaArt);
		$('#media-title').text(mediaTitle);
		$('#media-artist').text(mediaArtist);

		checkOverflow(mediaTitle,"#media-title");
		checkOverflow(mediaArtist,"#media-artist");

		var audio = document.createElement('audio');
	
	stop.click(function(){
		$('.music-player').fadeOut();					  

	});


	play.click(function(){

		
		
		var source = ".\\audios\\"+songId+".mp3"
		audio.setAttribute('src', source);
		audio.play();
	

	});

	pause.click(function(){
		audio.pause();


	});

	});


});

function textWidth(text){
 	var temp = '<span style="display:none">' + text + '</span>';
 	$('body').append(temp);
 	var width = $('body').find('span:last').width();
 	$('body').find('span:last').remove();
 	return width;
	};

function checkOverflow(el,con){
	wEl = textWidth(el);
		wCon = $(con).width();
		if(wEl>wCon){
			$(con).addClass('flowing');
		}
		else{
			$(con).removeClass('flowing');
		}
};

