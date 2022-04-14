const apikey = //eg: 1234567890abcd; 
const url = //eg: siteaddress.com;
const port = 7878;
const protocol = 'http';
const fullUrl = protocol+'://'+url+':'+port+'/api/v3/';

const axios = require('axios');

class Radarr {
	async lookup(term) {
		try {
			const results = await axios({
				method: 'get',
				url: fullUrl+'movie/lookup',
				params: {
					term: term,
					apikey: apikey
				}
			});

			return results.data;
		} catch (error) {
			console.log(error);
		}
	}

	async add(movie) {
		const folder = movie.title.replace(':', '') + ' (' + movie.year + ')';
		movie.monitored = true;
		movie.rootFolderPath = 'F:\\Movies\\';
		movie.folder = folder;
		movie.minimumAvailability = 'announced';
		movie.qualityProfileId = 4;
		movie.addOptions = {
			searchForMovie: true
		}

		try {
			const postResults = await axios({
				method: 'post',
				url: fullUrl+'movie',
				params: {apikey: apikey},
				data: movie 
			})
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = Radarr;