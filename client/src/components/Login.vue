<template>
    <v-flex column>
        <v-flex xs6 offset-xs3>
            <div class="white elevation-2">
                <v-toolbar flat dense class="cyan" dark>
                    <v-toolbar-title>Login</v-toolbar-title>
                </v-toolbar>

                <div class="px-4 py-2">
                	<form name="tab-tracker-form" autocomplete="off">
	                    <v-text-field
	                        name="email"
	                        label="E-mail"
	                        v-model="email"
	                        type="text"
	                    ></v-text-field>
	                    <v-text-field
	                        name="password"
	                        label="Password" 
	                        v-model="password"
	                        type="password"
	                    ></v-text-field>
	                </form>
                    <div class="error" v-html="error"></div>
                    <v-btn class="cyan" @click="login" dark>Login</v-btn>
                </div>
            </div>
        </v-flex> 
    </v-flex>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
    data () {
        return {
            email: '',
            password: '',
            error: null
        }
    },
    methods: {
        async login () {
            try {
                const response = await AuthenticationService.login({
                    email: this.email,
                    password: this.password
                });
                this.$store.dispatch('setToken', response.data.token);
                this.$store.dispatch('setUser', response.data.user);
            } catch (error) {
                this.error = error.response.data.error;
            }
        }
    }
}
</script>

<style scoped>

</style>
