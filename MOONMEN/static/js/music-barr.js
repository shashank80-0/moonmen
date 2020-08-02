$(document).ready(function(){

	let play = $('#play');
	let pause = $('#pause');
	let stop = $('#stop');
	let currTime = $('#current-time');
	let totalTime = $('#total-time');
	let durationSlider = $('#duration-slider');
	let volumeSlider = 	$('#volume-slider');
	let closePlayer = $('#close-player');
    let audio = document.createElement('audio');
    let source;
	let isPlaying = false;
	let mediaArt;
	let mediaTitle;
	let mediaArtist;
	let updateTimer;
	
	sliderColor();
	
	$(document).on("click",".stream-music",function(){

		resetPlayer();                              
		clearInterval(updateTimer);
		loadSong($(this).attr('id'));

		updateTimer = setInterval(seekUpdate,2000);
		
		isPlaying = false;
		
		
		//$('.music-player').fadeIn()
		//				  .removeClass('invisible');

		
		play.click(function(){
			playSong(audio);
		});


		pause.click(function(){
			pauseSong(audio);
		});


		stop.click(function(){
			stopSong(audio);
		});

	});

	/* --------------- END STREAM MUSIC ---------------*/


	closePlayer.click(function(){
		stopSong(audio);
		$('.music-player').fadeOut();
	});

	/*------------------END CLOSE PLAYER -----------------*/

	function loadSong(id){

		/* Loading song on id */
		let songId = $('#'+id).attr('id');
		/*-----------------------------------------------*/

		/* Displaying song info on the player */
		mediaArt = $('#'+id).parent().prev().attr("src");
		mediaTitle = $('#'+id).siblings('h4').text();
		mediaArtist = $('#'+id).siblings('p').text();
		$('#media-art').attr("src",mediaArt);
		$('#media-title').text(mediaTitle);
		$('#media-artist').text(mediaArtist);
		/*------------------------------------------------*/

		/*Checking if content is overflowing*/
		checkOverflow(mediaTitle,"#media-title");
		checkOverflow(mediaArtist,"#media-artist");
				//checkOverflow(mediaTitle,'#'+id);
		
		/*------------------------------------------------*/

		/*Creating an audio element*/		
		source = "/static/audios/"+songId+".mp3"
		audio.setAttribute('src', source);

		$('.music-player').fadeIn().removeClass('invisible');

		/*------------------------------------------------*/
	}

	/*-----------END loadSong()---------*/


	/*------------------------CONTROL FUNCTIONS---------------------*/

	/*To reset the time and slider*/
	function resetPlayer(){
		currTime.text("00:00");
		totalTime.text("00:00");
		durationSlider.val("0");
		sliderColor();
	}

	function playSong(audio){
		if(!isPlaying){
		audio.play();
		isPlaying = true;
		}
	}

	function pauseSong(audio){
		if(isPlaying){
			audio.pause();
			isPlaying = false;
		}
	}

	function stopSong(audio){
		if(isPlaying){
			audio.pause();
			audio.currentTime = 0;
			isPlaying = false;
		}
		else{
			audio.currentTime = 0;
		}
	}

	/*---------------------END CONTROL FUNCTIONS----------------*/

	function seekUpdate(){

		
		if(isPlaying){
			sliderColor();
		}
		durationSlider.change(function(){
			let seekTo = audio.duration * (durationSlider.val() / 100);
			audio.currentTime = seekTo;
			sliderColor();	
		});

		volumeSlider.change(function(){
			audio.volume = (volumeSlider.val() / 100);
			sliderColor();	
		});

			let seekPosition = 0;
			if((audio.duration != "NaN")){
				seekPosition = audio.currentTime * (100 / audio.duration);
				durationSlider.val(seekPosition);
			
				let currentMinutes = Math.floor(audio.currentTime / 60); 
	    		let currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60); 
			    let durationMinutes = Math.floor(audio.duration / 60); 
			    let durationSeconds = Math.floor(audio.duration - durationMinutes * 60); 

			    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; } 
			    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; } 
			    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; } 
			    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; } 

			    currTime.text(currentMinutes + ":" + currentSeconds); 
	    		totalTime.text(durationMinutes + ":" + durationSeconds); 
			}
		
	}

	/*-----------------END SEEK UPDATE --------------*/


		$(window).resize(function(){
			checkOverflow(mediaTitle,"#media-title");
			checkOverflow(mediaArtist,"#media-artist");
			
		});
	

	function sliderColor(){
		durationSlider.css("background" , 'linear-gradient(to right, #86c4ba 0%, #86c4ba ' + durationSlider.val() + '%, #fff ' + durationSlider.val() + '%, white 100%)');
		volumeSlider.css("background" , 'linear-gradient(to right, #86c4ba 0%, #86c4ba ' + volumeSlider.val() + '%, #fff ' + volumeSlider.val() + '%, white 100%)');
	}

	/*-------------END READY FUNCTION --------------*/

});


/*---------------OVER FLOW FUNCTIONS------------------*/


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
		if(wEl>wCon && wCon>0){
			//console.log("Element overlflowing");
			//console.log("Element width ="+wEl);
			//console.log("container width ="+wCon);
			$(con).addClass('flowing');
		}
		else{
			$(con).removeClass('flowing');
		}

};


/*------------------END OVER FLOW FUNCTIONS --------------------*/

/*------------Slider function----------------*/


