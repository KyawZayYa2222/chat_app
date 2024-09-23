<template>
    <input type="checkbox" id="dark-mode-checkbox" v-model="darkMode" hidden>
    <label for="dark-mode-checkbox" class="cursor-pointer">
        <div class="relative">
            <div class="absolute flex w-20 justify-between p-2 rounded-full dark:bg-[#595959] dark:text-[#CBCBCB] text-[#595959] bg-[#CBCBCB]">
                <font-awesome-icon icon="fa-moon" class="text-xl"/>
                <font-awesome-icon icon="fa-sun" class="text-xl"/>
            </div>

            <span class="absolute w-8 h-8 rounded-full top-0.5 left-0.5 bg-[#6178F1] duration-150"
            :class="{'translate-x-11':darkMode}"></span>
        </div>
    </label>
</template>


<script>
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import {mapGetters, mapActions} from 'vuex';

library.add(
    faSun,
    faMoon
)

export default {
    components: {
        FontAwesomeIcon
    },
    computed: {
        ...mapGetters(['getDarkModeStatus']),
        darkMode: {
            get() {
                return this.getDarkModeStatus
            },
            set(value) {
                this.toggleDarkModeStatus(value)
            }
        }
    },
    methods: {
        ...mapActions(['toggleDarkModeStatus'])
    }
}
</script>
