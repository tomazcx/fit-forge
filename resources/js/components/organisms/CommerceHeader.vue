<script setup>
import { Icon } from '@iconify/vue';
import NavBar from '../molecules/NavBar.vue';

const navItems = [
    {
        label: "Lançamento",
        href: "#lancamentos",
    },
    {
        label: "Whey Protein",
        href: "#",
    },
    {
        label: "Creatina",
        href: "#",
    },
    {
        label: "Pré-Treino",
        href: "#",
    },
    {
        label: "Acessórios",
        href: "#",
    },
]

</script>

<template>
    <header>
        <div class="bg-neutral">
            <p class="text-white p-2 font-semibold text-center">
                Qualidade internacional comprovada e preço direto da fábrica.
            </p>
        </div>
        <div class="p-4 items-center grid grid-cols-12 text-white bg-primary-content xl:px-48">
            <div class="flex flex-col col-span-2 gap-2 items-center">
                <img class="w-[60px] col-span-2" src="../../assets/fit-forge.svg" />
                <h1 class="uppercase font-semibold">Fit Forge</h1>
            </div>
            <div class="flex gap-2 col-span-8">
                <input placeholder="Pesquisar" class="w-full input text-black" />
                <button class="btn">
                    <Icon class="text-2xl" icon="material-symbols:search" />
                </button>
            </div>
            <div class="col-span-2 gap-8 flex justify-center">
                <a href="/cart" class="cursor-pointer hover:opacity-75 transition-opacity">
                    <Icon icon="mdi:cart-outline" class="text-4xl" />
                </a>
                <details class="dropdown dropdown-end">
                    <summary>
                        <Icon icon="ph:user-bold" class="text-4xl cursor-pointer hover:opacity-75 transition-opacity" />
                    </summary>
                    <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 text-black">
                        <li><a>
                                <Icon icon="ic:outline-log-out" class="text-xl" /> Fazer Login
                            </a></li>
                    </ul>
                </details>
            </div>
        </div>
        <NavBar :items="navItems" />
    </header>
</template>
