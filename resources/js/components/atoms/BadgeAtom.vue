<script setup>
import { Icon } from '@iconify/vue';

defineProps({
    icon: {
        type:String,
        required: true,
    },
    title: {
        type:String,
        required:true
    },
    subtitle: {
        type:String,
        required:true
    }
})
</script>

<template>
    <div class="border-4 flex gap-4 p-2 items-center border-primary-content rounded-full">
        <div class="p-4 bg-primary-content rounded-full">
            <Icon :icon="icon" class="text-4xl text-base-100" />
        </div>
        <div class="flex flex-col pr-4">
            <span class="font-semibold uppercase">{{title}}</span>
            <span>{{subtitle}}</span>
        </div>
    </div>
</template>
