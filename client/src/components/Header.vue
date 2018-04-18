<template>
    <v-toolbar fixed class="cyan" dark>
        <v-toolbar-title class="mr-4">
            <span class="home" @click="navigateTo({name: 'root'})" flat dark>
                TabTracker
            </span>
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn
                @click="navigateTo({name: 'songs'})"
                flat dark>
                Browse
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn
                @click="navigateTo({name: 'login'})"
                flat dark
                v-if="!$store.state.isUserLoggedIn">
                Login
            </v-btn>
            <v-btn
                @click="navigateTo({name: 'register'})"
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
        navigateTo (route) {
            this.$router.push(route);
        },
        logout () {
            this.$store.dispatch('setToken', null);
            this.$store.dispatch('setUser', null);
            this.$router.push({
                name: 'root '
            });
        }
    }
}
</script>

<style scoped>
.home {
    cursor: pointer;
}
</style>
