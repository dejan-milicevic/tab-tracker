<template>
	<v-layout>
		<v-flex xs4>
			<panel title="Song Metadata">
				<v-text-field
	                label="Title"
	                required
	                :rules="[required]"
	                v-model="song.title"
	            ></v-text-field>

	            <v-text-field
	                label="Artist"
	                required
	                :rules="[required]"
	                v-model="song.artist"
	            ></v-text-field>

	            <v-text-field
	                label="Genre"
	                required
	                :rules="[required]"
	                v-model="song.genre"
	            ></v-text-field>

	            <v-text-field
	                label="Album"
	                required
	                :rules="[required]"
	                v-model="song.album"
	            ></v-text-field>

	            <v-text-field
	                label="Album Image URL"
	                required
	                :rules="[required]"
	                v-model="song.albumImageUrl"
	            ></v-text-field>

	            <v-text-field
	                label="YouTube ID"
	                required
	                :rules="[required]"
	                v-model="song.youtubeId"
	            ></v-text-field>
			</panel>
		</v-flex>

		<v-flex xs8>
			<panel title="Song Structure" class="ml-2">
				<v-text-field
	                label="Tab"
	                required
	                :rules="[required]"
	                v-model="song.tab"
	                multi-line
	            ></v-text-field>

	            <v-text-field
	                label="Lyrics"
	                required
	                :rules="[required]"
	                v-model="song.lyrics"
	                multi-line
	            ></v-text-field>
			</panel>

			<div class="ml-2 mt-2">
				<div class="danger-alert" v-if="error">{{error}}</div>
				<v-btn class="cyan" @click="save" dark>Save Song</v-btn>
			</div>
		</v-flex>
	</v-layout>
</template>

<script>
import SongsService from '@/services/SongsService';

export default {
	data () {
		return {
			song: {
				title: null,
				artist: null,
				genre: null,
				album: null,
				albumImageUrl: null,
				youtubeId: null,
				lyrics: null,
				tab: null
			},
			error: null,
			required (value) {
				return !!value || 'Required'
			}
		}
	},
	methods: {
		async save () {
			this.error = null;
			const allFieldsFilledIn = Object.keys(this.song).every(key => !!this.song[key]);

			if (!allFieldsFilledIn) {
				this.error = "Please fill in all required fields.";
				return;
			}

			const songId = this.$store.state.route.params.songId;

			try {
				await SongsService.put(this.song)
				this.$router.push({
					name: 'song',
					params: {
						songId: songId
					}
				});
			} catch (error) {
				console.log(error)
			}
		}
    },
    async mounted () {
    	const songId = this.$store.state.route.params.songId;
    	
    	this.song = (await SongsService.show(songId)).data;
    }
};
</script>

<style scoped>

</style>
