<template>
    <h1 class="text-black">main app layout</h1>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
        this.testListening()
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
