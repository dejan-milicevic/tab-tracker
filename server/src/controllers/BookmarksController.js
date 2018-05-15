const {Bookmark, Song, User} = require('../models');
const Op = require('sequelize').Op;
const _ = require('lodash');

module.exports = {
	async index (req, res) {
		try {
			const userId = req.user.id;
			const {songId} = req.query;
			const where = {
				UserId: userId
			}
			if (songId) {
				where.SongId = songId;
			}
			const bookmarks = await Bookmark.findAll({
				where: where,
				include: [{
					model: Song
				}]
			})
			.map(bookmark => bookmark.toJSON())
			.map(bookmark => _.extend(
				{},
				bookmark.Song,
				bookmark
			));

			res.send(bookmarks);
		} catch (error) {
			res.status(500).send({
				error: 'An error has occured trying to get bookmark.'
			});
		}
	},
	async post (req, res) {
		try {
			const userId = req.user.id;
			const {songId} = req.body.params;
			const bookmark = await Bookmark.findOne({
				where: {
					SongId: songId,
					UserId: userId
				}
			});

			if (bookmark) {
				return res.status(400).send({
					error: 'Already set as bookmark.'
				});
			}

			const newBookmark = await Bookmark.create({
				SongId: songId,
				UserId: userId
			});

			res.send(newBookmark);
		} catch (error) {
			res.status(500).send({
				error: 'An error has occured trying to create bookmark.'
			});
		}
	},
	async delete (req, res) {
		try {
			const userId = req.user.id;
			const {bookmarkId} = req.params;
			const bookmark = await Bookmark.findOne({
				where: {
					id: bookmarkId,
					UserId: userId
				}
			});

			if (!bookmark) {
				res.status(403).send({
					error: 'you do not have access to this bookmark'
				})
			}
			await bookmark.destroy();
			res.send(bookmark);
		} catch (error) {
			res.status(500).send({
				error: 'An error has occured trying to delete bookmark.'
			});
		}
	}
};
