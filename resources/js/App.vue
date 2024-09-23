<template>
    <div :class="{'dark': darkMode}" class="dark:bg-[#212121] bg-[#FCFCFC]">
        <router-view></router-view>
    </div>

</template>

<script>
import { RouterView } from 'vue-router';
import {mapGetters} from 'vuex';

export default {
    computed: {
        ...mapGetters(['getDarkModeStatus']),
        darkMode() {
            return this.getDarkModeStatus
        }
    }
}
</script>
