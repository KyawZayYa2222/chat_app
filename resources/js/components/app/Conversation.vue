<template>
    <div class="flex flex-col w-full h-full">
        <ConversationHeader/>
        <div class="h-[100%]">
            <p>hello</p>
        </div>
        <ConversationFooter/>
    </div>
</template>

<script>
import ConversationFooter from './ConversationFooter.vue';
import ConversationHeader from './ConversationHeader.vue';

export default {
    components: {
        ConversationHeader,
        ConversationFooter
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
