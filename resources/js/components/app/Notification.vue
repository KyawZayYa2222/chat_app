<template>
    <div class="relative mt-2">
        <button @click="showPopup" class="me-4">
            <!-- <img src="/storage/icons/bell.svg" alt="png"> -->
             <font-awesome-icon icon="fa-bell" class="text-[#CCCCCC]"/>
        </button>
        <div v-if="activePopup == 'notification'" class="absolute top-8 right-4 py-2 z-10 rounded-lg text-[#FFFFFF] bg-[#454545]">
            <ul class="w-60">
                <li class="py-3 px-3 hover:bg-[#616161] delay-75 duration-150">
                    Mg Mg sent you a message.
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faBell} from '@fortawesome/free-regular-svg-icons'

library.add(
    faBell,
)

export default {
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
        }
    },
    computed: {
        activePopup() {
            return this.$store.getters.getActivePopup
        }
    },
    methods: {
        showPopup() {
            console.log('clicked')
            if(this.activePopup=="notification") {
                this.$store.commit('setActivePopup', '')
            } else {
                this.activePopup=="notification"
                this.$store.commit('setActivePopup', 'notification')
            }
        }
    }
}
</script>
