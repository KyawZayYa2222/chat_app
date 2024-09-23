<template>
    <div class="flex justify-between items-center w-full h-auto p-2 top-0 dark:bg-[#2C2C2C] bg-[#F2F2F2]">
        <div class="flex items-center">
            <figure class="w-12 h-12 rounded-full overflow-hidden">
                <img src="/storage/characters/a.png" alt="img">
            </figure>
            <h3 class="text-lg ms-2 dark:text-[#DADADA] text-[#222222]">Aung Aung</h3>
        </div>

        <!-- menu  -->
        <div class="relative">
            <button @click="showPopup" class="me-2">
                <img src="/storage/icons/more.svg" alt="more">
            </button>
            <div v-if="activePopup=='conversation-menu'" class="absolute top-8 right-2 bg-[#454545] text-[#FFFFFF] w-56 rounded-lg py-3">
                <ul>
                    <li class="hover:bg-[#616161] px-3 py-2 duration-100 delay-75">
                        <div class="flex items-center">
                            <font-awesome-icon icon="fa-magnifying-glass" class="pe-2 text-lg text-[#CCCCCC]"/>
                            Search
                        </div>
                    </li>
                    <li class="hover:bg-[#616161] px-3 py-2 duration-100 delay-75">
                        <div class="flex items-center">
                            <font-awesome-icon icon="fa-user-group" class="pe-2 text-lg text-[#CCCCCC]"/>
                            Create Chat Group
                        </div>
                    </li>
                    <li class="hover:bg-[#616161] px-3 py-2 duration-100 delay-75">
                        <div class="flex items-center">
                            <font-awesome-icon icon="fa-broom" class="pe-2 text-lg text-[#CCCCCC]"/>
                            Clear Chat History
                        </div>
                    </li>
                    <!-- <li class="hover:bg-[#616161] px-3 py-2 duration-100 delay-75">
                        <div class="flex items-center">
                            <font-awesome-icon icon="fa-broom" class="pe-2 text-lg text-[#CCCCCC]"/>
                            Clear Chat History
                        </div>
                    </li> -->
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faMagnifyingGlass, faUserGroup, faBroom, faTrash} from '@fortawesome/free-solid-svg-icons'

library.add(
    faMagnifyingGlass,
    faUserGroup,
    faBroom,
    faTrash
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
            if(this.activePopup=="conversation-menu") {
                this.$store.commit('setActivePopup', '')
            } else {
                this.activePopup=="conversation-menu"
                this.$store.commit('setActivePopup', 'conversation-menu')
            }
        }
    }
}
</script>
