<script setup>
import NavLink from '../atoms/NavLink.vue';

defineProps({
    items: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <nav class="bg-base-200 items-center justify-center flex">
        <NavLink v-for="item in items" :key="item.label + '-' + item.href" v-bind="item">
            {{ item.label }}
        </NavLink>
    </nav>
</template>
