<template>
    <v-layout>
        <v-flex xs6 v-if="isUserLoggedIn">
            <songs-bookmarks />
            <recently-viewed-songs class="mt-2" />
        </v-flex>

        <v-flex :class="{xs12: !isUserLoggedIn, xs6: isUserLoggedIn}" class="ml-2">
            <songs-search-panel />
            <songs-panel class="mt-2" />
        </v-flex>
    </v-layout>
</template>

<script>
import {mapState} from 'vuex';
import SongsPanel from './SongsPanel';
import SongsBookmarks from './SongsBookmarks';
import SongsSearchPanel from './SongsSearchPanel';
import RecentlyViewedSongs from './RecentlyViewedSongs';

export default {
    computed: {
        ...mapState([
            'isUserLoggedIn'
        ])
    },
    components: {
        SongsPanel,
        SongsSearchPanel,
        SongsBookmarks,
        RecentlyViewedSongs
    }
};
</script>

<style scoped>

</style>
