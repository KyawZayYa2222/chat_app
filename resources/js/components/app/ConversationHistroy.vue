<template>
    <div class="">
        <Transition name="menu">
            <div v-if="menuShow" class="absolute h-full w-full dark:bg-[#323232] bg-[#F9F9F9]">
                <div class="p-3 flex justify-between">
                    <SiteLogo/>
                    <button @click="menuShow = false">
                        <font-awesome-icon icon="fa-xmark" class="text-2xl text-[#AAAAAA]"/>
                    </button>
                </div>

                <div class="p-3">
                    <div class="dark:bg-[#595959] bg-[#DCDCDC] rounded-2xl px-2 py-4 mb-3">
                        <div class="w-20 mb-2 overflow-hidden rounded-full mx-auto">
                            <img src="/storage/characters/k.png" alt="">
                        </div>
                        <h4 class="text-center text-2xl dark:text-white text-black">Kyaw Zay Ya</h4>
                        <h6 class="text-center dark:text-[#E0E0E0] text-[#454545]">kyawzayya100417@gmail.com</h6>
                    </div>
                    <ul>
                        <li class="mb-3">
                            <a href="">
                                <div class="dark:bg-[#595959] bg-[#DCDCDC] dark:text-[#FFFFFF] text-[#222222] rounded-xl p-4">
                                    <font-awesome-icon icon="fa-user-pen" class="text-lg dark:text-[#CBCBCB] text-[#575757] mr-2"/> Edit Profile
                                </div>
                            </a>
                        </li>
                        <li class="mb-3">
                            <a href="">
                                <div class="dark:bg-[#595959] bg-[#DCDCDC] dark:text-[#FFFFFF] text-[#222222] rounded-xl p-4">
                                    <font-awesome-icon icon="fa-lock" class="text-lg dark:text-[#CBCBCB] text-[#575757] mr-2"/> Change Password
                                </div>
                            </a>
                        </li>
                        <li class="mb-3">
                            <a href="">
                                <div class="dark:bg-[#595959] bg-[#DCDCDC] dark:text-[#FFFFFF] text-[#222222] rounded-xl p-4">
                                    <font-awesome-icon icon="fa-right-from-bracket" class="text-lg dark:text-[#CBCBCB] text-[#575757] mr-2"/> Logout
                                </div>
                            </a>
                        </li>
                    </ul>

                    <DarkLightToggle/>

                </div>
            </div>
        </Transition>

        <div class="h-full dark:bg-[#323232] bg-[#F9F9F9]">
            <div class="p-3 flex justify-between">
                <SiteLogo/>
                <button @click="menuShow = true">
                    <font-awesome-icon icon="fa-bars" class="text-2xl text-[#AAAAAA]"/>
                </button>
            </div>

            <div class="flex h-fit p-2">
                <input
                type="text"
                class="sm:w-80 px-3 w-full h-[46px] outline-none rounded-s-xl bg-[#D9D9D9] placeholder-[#2B2B2B]"
                placeholder="Search ..">
                <div class="bg-[#6178F1] w-[46px] flex justify-center items-center rounded-e-xl">
                    <img src="/storage/icons/search.svg">
                </div>
            </div>
            <div class="mt-4">
                <ul>
                    <li class="flex mx-2 py-2 px-3 mb-2 dark:bg-[#595959] bg-[#DCDCDC] rounded-2xl">
                        <div>
                            <figure class="w-12 h-12 rounded-full overflow-hidden">
                                <img src="/storage/characters/a.png" alt="img">
                            </figure>
                        </div>
                        <div class="px-2 w-full">
                            <div class="flex justify-between w-full dark:text-[#DADADA] text-[#5e5e5e] font-semibold">
                                <span class="">Aung Aung</span>
                                <span class="text-right">12:30 PM</span>
                            </div>
                            <p class="dark:text-[#BBBBBB] text-[#5e5e5e]">Hay, how are you?</p>
                        </div>
                    </li>
                    <li class="flex mx-2 py-2 px-3 mb-2 dark:bg-[#595959] bg-[#DCDCDC] rounded-2xl">
                        <div>
                            <figure class="w-12 h-12 rounded-full overflow-hidden">
                                <img src="/storage/characters/h.png" alt="img">
                            </figure>
                        </div>
                        <div class="px-2 w-full">
                            <div class="flex justify-between w-full dark:text-[#DADADA] text-[#5e5e5e] font-semibold">
                                <span class="">Aung Aung</span>
                                <span class="text-right">12:30 PM</span>
                            </div>
                            <p class="dark:text-[#BBBBBB] text-[#5e5e5e]">Hay, how are you?</p>
                        </div>
                    </li>
                    <!-- <li class="flex mx-2 py-2 border border-t-0 border-s-0 border-e-0 border-[#575757]">
                        <div>
                            <figure class="w-14 h-14 rounded-full overflow-hidden">
                                <img src="/storage/characters/h.png" alt="img">
                            </figure>
                        </div>
                        <div class="px-2 w-full">
                            <div class="flex justify-between w-full text-[#DADADA] font-semibold">
                                <span class="">Hnin Hnin</span>
                                <span class="text-right">12:30 PM</span>
                            </div>
                            <p class="text-[#BBBBBB]">Hay, how are you?</p>
                        </div>
                    </li> -->
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import SiteLogo from '../common/SiteLogo.vue'
import DarkLightToggle from '../common/DarkLightToggle.vue';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faBars, faXmark, faUserPen, faLock, faRightFromBracket} from '@fortawesome/free-solid-svg-icons'

library.add(
    faBars,
    faXmark,
    faUserPen,
    faLock,
    faRightFromBracket
)

export default {
    components: {
        SiteLogo,
        FontAwesomeIcon,
        DarkLightToggle
    },
    data() {
        return {
            menuShow: false,
        }
    }
}
</script>
