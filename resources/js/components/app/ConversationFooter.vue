<template>
    <div class="bottom-0 dark:bg-[#2C2C2C] bg-[#F2F2F2] py-2 px-2 w-full h-auto">
            <div class="flex items-center">
                <label for="file-input">
                    <img src="/storage/icons/image-regular.svg" class="w-8 me-2" style="color:white" alt="file-input">
                </label>
                <input
                type="file"
                id="file-input"
                hidden>
                <textarea
                @keyup="resizeBox"
                class="w-full md:w-[600px] h-[36px] px-3 pt-2 outline-none bg-[#D9D9D9] rounded-lg overflow-hidden resize-none"
                placeholder="Type here"></textarea>
                <button type="submit" class="ms-1">
                    <img src="/storage/icons/send-btn.svg" class="w-8" alt="send">
                </button>
            </div>
        </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        resizeBox(e) {
            e.target.style.height = '42px';
            let scHeight = e.target.scrollHeight;
            e.target.style.height = scHeight+'px';
        }
    }
}
</script>
