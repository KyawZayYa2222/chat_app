<template>
    <div class="flex justify-between items-center w-full sm:px-6 px-3 py-2 bg-[#323232] border border-t-0 border-l-0 border-r-0 border-[#707070]">
        <SiteLogo/>
        <div class="flex items-center">
            <Notification class="me-3"/>
            <NavProfile/>
        </div>
    </div>
</template>

<script>
import SiteLogo from '../SiteLogo.vue';
import NavProfile from './NavProfile.vue';
import Notification from './Notification.vue';

export default {
    components: {
        SiteLogo,
        Notification,
        NavProfile
    },
    data() {
        return {

        }
    },
}
</script>
