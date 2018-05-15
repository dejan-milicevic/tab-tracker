<template>
    <v-toolbar fixed class="cyan" dark>
        <v-toolbar-title class="mr-4">
            <router-link class="home" tab="span" :to="{name: 'root'}" flat dark>
                TabTracker
            </router-link>
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn
                :to="{name: 'songs'}"
                flat dark>
                Browse
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn
                :to="{name: 'login'}"
                flat dark
                v-if="!$store.state.isUserLoggedIn">
                Login
            </v-btn>
            <v-btn
                :to="{name: 'register'}"
                flat dark
                v-if="!$store.state.isUserLoggedIn">
                Sign up
            </v-btn>
            <v-btn
                @click="logout"
                flat dark
                v-if="$store.state.isUserLoggedIn">
                Log out
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    methods: {
        logout () {
            this.$store.dispatch('setToken', null);
            this.$store.dispatch('setUser', null);
            this.$router.push({name: 'songs'});
        }
    }
};
</script>

<style scoped>
.home {
    cursor: pointer;
}
</style>
