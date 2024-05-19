<template>
    <div class="relative w-screen h-screen text-white bg-[#212121]">
        <div class="absolute top-0 p-3 w-full flex justify-between">
            <h2 class="text-3xl">LOGO</h2>
            <router-link to="/register" class="z-10">Register</router-link>
        </div>
        <div class="absolute top-0 w-full h-full flex justify-center items-center">
                <form @submit.prevent="login" class="sm:w-96 w-full px-3">
                    <p class="text-right mb-3">Login to your account.</p>
                    <div v-if="errors.message" class="w-full text-center py-3 rounded-lg mb-3 text-red-200 bg-red-500 bg-opacity-55">{{errors.message}}</div>
                    <div class="input-gp01">
                        <label for="email" clasys="label-01">Email</label>
                        <input type="email"
                        id="email"
                        v-model="email"
                        :class="{'border-2': errors.email, 'border-red-500': errors.email}"
                        class="input-s01"
                        placeholder="example@mail.com">
                        <small v-if="errors.email" class="error-mesg">{{ errors.email[0] }}</small>
                    </div>

                    <div class="input-gp01">
                        <label for="password" class="label-01">Password</label>
                        <input type="password"
                        id="password"
                        v-model="password"
                        :class="{'border-2': errors.password, 'border-red-500': errors.password}"
                        class="input-s01"
                        placeholder="">
                        <small v-if="errors.password" class="error-mesg">{{ errors.password[0] }}</small>
                    </div>

                    <div class="flex justify-between items-center">
                        <p>Forgot password ?</p>
                        <submit-button button-name="Login" :is-loading="isLoading"/>
                    </div>
                </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import SubmitButton from './SubmitButton.vue';

export default {
    components: {
        SubmitButton
    },
    data() {
        return {
            email: '',
            password: '',
            errors: {},
            isLoading: false,
        }
    },
    methods: {
        login() {
            this.isLoading = true
            const url = this.$store.getters.getBaseUrl + '/login';
            axios.post(url, {
                'email': this.email,
                'password': this.password
            })
            .then(resp => {
                console.log(resp)
                if(resp.data.success) {
                    this.$store.commit('setAccessToken', resp.data.data.token)
                    this.$store.commit('setUserData', resp.data.data.user)
                    this.$router.push('/')
                }
            })
            .catch(err => {
                console.log(err)
                if(err.response.status === 422) {
                    this.errors = err.response.data.errors
                } else {
                    console.log(err.response.data.message)
                    this.errors = {}
                    this.errors.message = err.response.data.message
                }
            })
            .finally(() => this.isLoading = false)
        }
    }
}
</script>
