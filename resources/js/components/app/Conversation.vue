<template>
    <div class="flex flex-col w-full h-full no-scrollbar relative">
        <ConversationHeader/>
        <div class="flex flex-col-reverse overflow-y-auto no-scrollbar">
            <div class="px-3 pb-3 flex flex-col">
                <div class="flex items-center">
                    <p class="bg-[#413F3F] text-[#FFFFFF] py-2 px-3 rounded-xl rounded-bl-none">hi</p>
                    <small class="ms-2 text-[#BBBBBB]">Just now</small>
                </div>
                <div class="flex items-center flex-row-reverse mt-2">
                    <p class="bg-[#6178F1] text-[#FFFFFF] py-2 px-3 rounded-xl rounded-br-none">hello</p>
                    <small class="me-2 text-[#BBBBBB]">12:30 PM</small>
                </div>
                <div class="flex items-center flex-row-reverse  mt-2">
                    <p class="bg-[#6178F1] text-[#FFFFFF] py-2 px-3 rounded-xl rounded-br-none">hello</p>
                    <small class="me-2 text-[#BBBBBB]">12:31 PM</small>
                </div>
                <div class="flex items-center mt-2">
                    <p class="bg-[#413F3F] text-[#FFFFFF] py-2 px-3 rounded-xl rounded-bl-none">hello</p>
                    <small class="ms-2 text-[#BBBBBB]">Just now</small>
                </div>
                <div class="flex items-center mt-2">
                    <p class="bg-[#413F3F] text-[#FFFFFF] py-2 px-3 rounded-xl rounded-bl-none">hello</p>
                    <small class="ms-2 text-[#BBBBBB]">Just now</small>
                </div>
                <div class="flex items-center flex-row-reverse mt-2">
                    <p class="bg-[#6178F1] text-[#FFFFFF] py-2 px-3 rounded-xl rounded-br-none">hello</p>
                    <small class="me-2 text-[#BBBBBB]">12:30 PM</small>
                </div>
                <div class="flex items-center flex-row-reverse mt-2">
                    <p class="bg-[#6178F1] text-[#FFFFFF] py-2 px-3 rounded-xl rounded-br-none">hello</p>
                    <small class="me-2 text-[#BBBBBB]">12:31 PM</small>
                </div>
                <div class="flex items-center mt-2">
                    <p class="bg-[#413F3F] text-[#FFFFFF] py-2 px-3 rounded-xl rounded-bl-none">hello</p>
                    <small class="ms-2 text-[#BBBBBB]">Just now</small>
                </div>
                <div class="flex items-center mt-2">
                    <p class="bg-[#413F3F] text-[#FFFFFF] py-2 px-3 rounded-xl rounded-bl-none">hello</p>
                    <small class="ms-2 text-[#BBBBBB]">Just now</small>
                </div>
                <div class="flex items-center flex-row-reverse mt-2">
                    <p class="bg-[#6178F1] text-[#FFFFFF] py-2 px-3 rounded-xl rounded-br-none">hello</p>
                    <small class="me-2 text-[#BBBBBB]">12:30 PM</small>
                </div>
                <div class="flex items-center flex-row-reverse mt-2">
                    <p class="bg-[#6178F1] text-[#FFFFFF] py-2 px-3 rounded-xl rounded-br-none">hello</p>
                    <small class="me-2 text-[#BBBBBB]">12:31 PM</small>
                </div>
                <div class="flex items-center mt-2">
                    <p class="bg-[#413F3F] text-[#FFFFFF] py-2 px-3 rounded-xl rounded-bl-none">hello</p>
                    <small class="ms-2 text-[#BBBBBB]">Just now</small>
                </div>
                <div class="flex items-center mt-2">
                    <p class="bg-[#413F3F] text-[#FFFFFF] py-2 px-3 rounded-xl rounded-bl-none">hello</p>
                    <small class="ms-2 text-[#BBBBBB]">Just now</small>
                </div>
                <div class="flex items-center flex-row-reverse mt-2">
                    <p class="bg-[#6178F1] text-[#FFFFFF] py-2 px-3 rounded-xl rounded-br-none">hello</p>
                    <small class="me-2 text-[#BBBBBB]">12:30 PM</small>
                </div>
                <div class="flex items-center flex-row-reverse mt-2">
                    <p class="bg-[#6178F1] text-[#FFFFFF] py-2 px-3 rounded-xl rounded-br-none">hello</p>
                    <small class="me-2 text-[#BBBBBB]">12:31 PM</small>
                </div>
                <div class="flex items-center mt-2">
                    <p class="bg-[#413F3F] text-[#FFFFFF] py-2 px-3 rounded-xl rounded-bl-none">hello</p>
                    <small class="ms-2 text-[#BBBBBB]">Just now</small>
                </div>
                <div class="flex items-center mt-2">
                    <p class="bg-[#413F3F] text-[#FFFFFF] py-2 px-3 rounded-xl rounded-bl-none">hello</p>
                    <small class="ms-2 text-[#BBBBBB]">Just now</small>
                </div>
                <div class="flex items-center flex-row-reverse mt-2">
                    <p class="bg-[#6178F1] text-[#FFFFFF] py-2 px-3 rounded-xl rounded-br-none">hello</p>
                    <small class="me-2 text-[#BBBBBB]">12:30 PM</small>
                </div>
                <div class="flex items-center flex-row-reverse mt-2">
                    <p class="bg-[#6178F1] text-[#FFFFFF] py-2 px-3 rounded-xl rounded-br-none">hello</p>
                    <small class="me-2 text-[#BBBBBB]">12:31 PM</small>
                </div>
                <div class="flex items-center mt-2">
                    <p class="bg-[#413F3F] text-[#FFFFFF] py-2 px-3 rounded-xl rounded-bl-none">hello</p>
                    <small class="ms-2 text-[#BBBBBB]">Just now</small>
                </div>
            </div>
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
