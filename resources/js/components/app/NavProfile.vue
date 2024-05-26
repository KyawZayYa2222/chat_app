<template>
    <div class="sm:flex hidden items-center">
        <h2 class="text-[#FFFFFF] me-3">{{ user.name }}</h2>
        <img src="/storage/characters/k.png" class="w-12 rounded-full" alt="">
    </div>
    <div class="sm:hidden block">
        <img src="/storage/icons/profile.svg" alt="profile">
    </div>

    <div v-if="isDropDown" class="absolute top-16 right-6 rounded-lg text-[#FFFFFF] bg-[#323232]">
        <div class="flex justify-center items-center bg-[#6178F1] rounded-t-lg">
            <h3 class="sm:block hidden my-3">Account</h3>
            <div class="sm:hidden flex flex-col items-center m-2">
                <img src="/storage/characters/k.png" alt="profile" class="w-14 rounded-full">
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
</template>

<script>
export default {
    data() {
        return {
            isDropDown: false
        }
    },
    computed: {
        user() {
            return JSON.parse(localStorage.getItem('user-data'))
        }
    },
    mounted() {
        console.log(this.user)
    }
}
</script>
