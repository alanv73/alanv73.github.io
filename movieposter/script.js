$('#find').click(() => {
	let film = $('#film').val();
	if (!film) {
		film = 'Jaws';
	}

	$.getJSON(
		`https://api.themoviedb.org/3/search/movie?api_key=9b9e4d62897f63e207cd44de1a946ebf&language=en-US&query=${film}`,
		function(data) {
			console.log(data);
			let section = $('#found>.row');
			section.html('');
			data.results.forEach((movie) => {
				let div = document.createElement('div');
				div.className = 'movies col-lg-4 col-md-6 mt-4';
				let h6 = document.createElement('h6');
				h6.className = 'text-truncate';
				h6.textContent = movie.title;
				div.appendChild(h6);
				var poster;
				let img = document.createElement('img');
				if (movie.poster_path) {
					poster = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
				} else {
					poster =
						'https://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png';
					img.width = 300;
				}
				img.src = poster;
				div.appendChild(img);

				section.append(div);
			});
		}
	);
});
