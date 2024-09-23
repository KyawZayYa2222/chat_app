<template>
    <div class="relative w-screen h-screen text-white bg-[#212121]">
        <div class="absolute top-0 p-3 w-full flex justify-between">
            <h2 class="text-3xl">LOGO</h2>
            <!-- <RouterLink to="/register" class="z-10">Register</RouterLink> -->
        </div>
        <div class="absolute top-0 w-full h-full flex justify-center items-center">
                <form class="flex flex-col sm:w-96 w-full px-3">
                    <p class="text-right mb-3">Login to your account.</p>
                    <label for="email" class="text-sm ml-2">Enter your email</label>
                    <input type="email"
                    id="email"
                    v-model="email"
                    class="h-12 px-3 py-2 outline-none rounded-xl mb-4 bg-slate-100 text-gray-800"
                    placeholder="Email">

                    <!-- <label for="password" class="text-sm ml-2">Password</label>
                    <input type="password"
                    id="password"
                    v-model="password"
                    class="h-12 px-3 py-2 outline-none rounded-xl mb-4 bg-slate-100 text-gray-800"
                    placeholder="Password"> -->

                    <div class="text-right">
                        <!-- <p>Forgot password ?</p> -->
                        <button type="submit"
                        class="bg-[#7067ef] text-gray-900 rounded-xl h-12 w-24 hover:bg-[#746eea] duration-150 delay-75">
                        Send</button>
                    </div>
                </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    }
}
</script>
