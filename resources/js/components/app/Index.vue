<template>
    <div class="h-screen flex flex-col">
        <div class="bg-[#212121]">
            <Navbar/>
        </div>
        <div class="h-full flex">
            <ConversationHistroy/>
            <Conversation/>
        </div>
    </div>
</template>

<script>
import Conversation from './Conversation.vue';
import ConversationHistroy from './ConversationHistroy.vue';
import Navbar from './Navbar.vue';

export default {
    components: {
        Navbar,
        ConversationHistroy,
        Conversation
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
