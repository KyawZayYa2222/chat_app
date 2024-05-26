<template>
    <div class="bg-[#212121]">
        <Navbar/>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';

export default {
    components: {
        Navbar,
    },
    data() {
        return {

        }
    },
    mounted() {
        // this.testListening()
    },
    methods: {
        testListening() {
            console.log('listening')
            window.Echo.channel('testing')
                       .listen('TestFlight', (e) => {
                            console.log('success')
                            console.log(e.message)
                       })
        }
    }
}
</script>
