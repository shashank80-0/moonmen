	$.ajax({
		type: 'GET',
		url: "https://api.jsonbin.io/b/5f25382f6f8e4e3faf283efb/1",
		headers: {
			"secret-key" : "$2b$10$R.EjiEOVkBk4sVOSLd.IEuhSCSrz9nyj7ucg8Kg5s0BVR/hXspP4i"
		},
		success: function(songs){
			let output ='';
			$.each(songs, function(index,song){
			songTitle = song.Title;
			songArtist = song.Artist;
			songPoster = song.Poster;
			songId = song.Id;

			output+= `
			<div class="col-md-3 card bg-light text-dark shadow m-3">
		      <img src= ${songPoster} class="card-img-top rounded shadow mt-3">
		      <div class="card-body col">
		        <h4 class="card-title row">${songTitle}</h4>
		        <p class="card-text row">${songArtist}</p>
		        <a class="btn btn-primary stream-music text-white shadow row" id=${songId}>LISTEN</a>
		      </div>      
		    </div>
			`;
		});

		$('#music-section').append(output);
		}

	});

