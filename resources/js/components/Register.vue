<template>
    <div class="relative w-screen h-screen text-white bg-[#212121]">
        <div class="absolute top-0 p-3 w-full flex justify-between">
            <h2 class="text-3xl">LOGO</h2>
            <router-link to="/login" class="z-10">Login</router-link>
        </div>
        <div class="absolute top-0 w-full h-full flex justify-center items-center">
                <form @submit.prevent="register" class="flex flex-col sm:w-96 w-full px-3">
                    <p class="text-right mb-3">Register an account.</p>
                    <div class="input-gp01">
                        <label for="username" class="text-sm ml-2">Username</label>
                        <input type="text"
                        id="username"
                        v-model="name"
                        :class="{'border-2': errors.name, 'border-red-500': errors.name}"
                        class="input-s01"
                        placeholder="Name" autocomplete="off">
                        <small v-if="errors.name" class="error-mesg">{{ errors.name[0] }}</small>
                    </div>

                    <div class="input-gp01">
                        <label for="email" class="text-sm ml-2">Email</label>
                        <input type="email"
                        id="email"
                        v-model="email"
                        :class="{'border-2': errors.email, 'border-red-500': errors.email}"
                        class="input-s01"
                        placeholder="Email" autocomplete="off">
                        <small v-if="errors.email" class="error-mesg">{{ errors.email[0] }}</small>
                    </div>

                    <div class="input-gp01">
                        <label for="password" class="text-sm ml-2">Password</label>
                        <input type="password"
                        id="password"
                        v-model="password"
                        :class="{'border-2': errors.password, 'border-red-500': errors.password}"
                        class="input-s01"
                        placeholder="Password" autocomplete="off">
                        <small v-if="errors.password" class="error-mesg">{{ errors.password[0] }}</small>
                    </div>

                    <div class="input-gp01">
                        <label for="confirm_password" class="text-sm ml-2">Confirm password</label>
                        <input type="password"
                        id="confirm_password"
                        v-model="confirmPassword"
                        class="input-s01"
                        placeholder="Confirm Password" autocomplete="off">
                    </div>

                    <div class="text-right">
                        <submit-button button-name="Register" :is-loading="isLoading"/>
                    </div>
                </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import SubmitButton from './SubmitButton.vue';

export default {
    components: {
        SubmitButton,
    },
    data() {
        return {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            errors: '',
            isLoading: false,
        }
    },
    methods: {
        register() {
            this.isLoading = true
            const url = this.$store.getters.getBaseUrl + '/register';
            axios.post(url, {
                'name': this.name,
                'email': this.email,
                'password': this.password,
                'password_confirmation': this.confirmPassword
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
                }
            })
            .finally(() => this.isLoading = false)
        }
    }
}
</script>
