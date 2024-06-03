<template>
    <div class="me-4">
        <img src="/storage/icons/bell.svg" alt="png">
    </div>
    <div v-if="isDropDown" class="absolute py-2 z-10 top-16 right-28 rounded-lg text-[#cad2fa] bg-[#6178F1]">
        <ul class="w-60">
            <li class="py-3 px-3 hover:bg-[#566ddf] delay-75 duration-150">
                Mg Mg sent you a message.
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isDropDown: false
        }
    }
}
</script>
