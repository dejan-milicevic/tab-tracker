<template>
    <v-flex column>
        <v-flex xs6 offset-xs3>
            <panel title="Login">
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
                <div class="danger-alert" v-html="error"></div>
                <v-btn class="cyan" @click="login" dark>Login</v-btn>
            </panel>
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
                this.$router.push({name: 'songs'});
            } catch (error) {
                this.error = error.response.data.error;
            }
        }
    }
};
</script>

<style scoped>

</style>
