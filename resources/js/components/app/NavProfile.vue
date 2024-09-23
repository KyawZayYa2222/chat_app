<template>
    <div class="relative">
        <button @click="showPopup" class="sm:flex hidden items-center">
            <h2 class="text-[#FFFFFF] me-3">{{ user.name }}</h2>
            <figure class="w-12 h-12 rounded-full overflow-hidden">
                <img src="/storage/characters/k.png" alt="profile">
            </figure>
        </button>
        <button @click="showPopup" class="sm:hidden block">
            <img src="/storage/icons/profile.svg" alt="profile">
        </button>

        <div v-if="activePopup == 'account-setting'" class="absolute z-20 top-14 right-0 rounded-lg text-[#FFFFFF] bg-[#323232]">
            <div class="flex justify-center items-center bg-[#6178F1] rounded-t-lg">
                <h3 class="sm:block hidden my-3">Account</h3>
                <div class="sm:hidden flex flex-col items-center m-2">
                    <figure class="w-14 h-14 rounded-full overflow-hidden">
                        <img src="/storage/characters/k.png" alt="profile">
                    </figure>
                    <h3 class="text-xl">{{ user.name }}</h3>
                    <h5 class="text-sm">{{ user.email }}</h5>
                </div>
            </div>
            <ul class="w-48">
                <li class="py-3 px-3 hover:bg-[#3a3a3a] delay-75 duration-150">
                    <div class="flex items-center w-full">
                        <img src="/storage/icons/edit_profile.svg" class="me-2">
                        <p>Edit Profile</p>
                    </div>
                </li>
                <li class="py-3 px-3 hover:bg-[#3a3a3a] delay-75 duration-150">
                    <div class="flex items-center w-full">
                        <img src="/storage/icons/lock.svg" class="me-2">
                        <p>Change Password</p>
                    </div>
                </li>
                <li class="py-3 px-3 hover:bg-[#3a3a3a] delay-75 duration-150">
                    <div class="flex items-center w-full">
                        <img src="/storage/icons/logout.svg" class="me-2">
                        <p>Logout</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        user() {
            return JSON.parse(localStorage.getItem('user-data'))
        },
        activePopup() {
            return this.$store.getters.getActivePopup
        }
    },
    mounted() {
        console.log(this.user)
    },
    methods: {
        showPopup() {
            console.log('clicked')
            if(this.activePopup=="account-setting") {
                this.$store.commit('setActivePopup', '')
            } else {
                this.activePopup=="account-setting"
                this.$store.commit('setActivePopup', 'account-setting')
            }
        }
    }
}
</script>
