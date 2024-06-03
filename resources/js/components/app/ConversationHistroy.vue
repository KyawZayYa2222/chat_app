<template>
    <div class="bg-[#323232]">
        <div class="flex h-fit p-2">
            <input
            type="text"
            class="sm:w-80 px-3 w-full h-[46px] outline-none rounded-s-lg"
            placeholder="Search ..">
            <div class="bg-[#6178F1] w-[46px] flex justify-center items-center rounded-e-lg">
                <img src="/storage/icons/search.svg">
            </div>
        </div>
        <div>
            <ul>
                <li class="flex mx-2 py-2 border border-t-0 border-s-0 border-e-0 border-[#575757]">
                    <div>
                        <figure class="w-14 h-14 rounded-full overflow-hidden">
                            <img src="/storage/characters/a.png" alt="img">
                        </figure>
                    </div>
                    <div class="px-2 w-full">
                        <div class="flex justify-between w-full text-[#DADADA] font-semibold">
                            <span class="">Aung Aung</span>
                            <span class="text-right">12:30 PM</span>
                        </div>
                        <p class="text-[#BBBBBB]">Hay, how are you?</p>
                    </div>
                </li>
                <li class="flex mx-2 py-2 border border-t-0 border-s-0 border-e-0 border-[#575757]">
                    <div>
                        <figure class="w-14 h-14 rounded-full overflow-hidden">
                            <img src="/storage/characters/h.png" alt="img">
                        </figure>
                    </div>
                    <div class="px-2 w-full">
                        <div class="flex justify-between w-full text-[#DADADA] font-semibold">
                            <span class="">Hnin Hnin</span>
                            <span class="text-right">12:30 PM</span>
                        </div>
                        <p class="text-[#BBBBBB]">Hay, how are you?</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
