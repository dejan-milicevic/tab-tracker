const {Song} = require('../models');
const Op = require('sequelize').Op;

module.exports = {
	async index (req, res) {
		try {
			var songs;
			var search = req.query.search;

			if (search) {
				songs = await Song.findAll({
					where: {
						[Op.or]: [
							{'title': {[Op.like]: `%${search}%`}},
							{'artist': {[Op.like]: `%${search}%`}},
							{'album': {[Op.like]: `%${search}%`}},
							{'genre': {[Op.like]: `%${search}%`}}
						]
					}
				});
			} else {
				songs = await Song.findAll({
					limit: 10
				});
			}

			res.send(songs);
		} catch (error) {
			res.status(500).send({
				error: 'An error has occured trying to get songs.'
			});
		}
	},
	async show  (req, res) {
		try {
			const song = await Song.findById(req.params.songId);

			res.send(song);
		} catch (error) {
			res.status(500).send({
				error: 'An error has occured trying to get the song.'
			});
		}
	},
	async post (req, res) {
		try {
			const song = await Song.create(req.body);

			res.send(song);
		} catch (error) {
			res.status(500).send({
				error: 'An error has occured trying to create the song.'
			});
		}
	},
	async put (req, res) {
		try {
			const song = await Song.update(req.body, {
				where: {
					id: req.params.songId
				}
			});
			
			res.send(req.body);
		} catch (error) {
			res.status(500).send({
				error: 'An error has occured trying to update the song.'
			});
		}
	}
};
